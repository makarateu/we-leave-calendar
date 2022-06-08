<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Leave extends WE_Controller
{
    const APPROVED = 'SCHEDULED';
    const PENDING_APPROVAL = 'PENDING APPROVAL';
    const TAKEN = 'TAKEN';

    /**
     * @var ReportRepository
     */
    public $reportRepository;

    public function __construct()
    {
        parent::__construct();
        $this->data['title'] = 'Home';
    }

    public function index()
    {
        $user = $this->uri->segment(3);
        $this->data['employeeNumber'] = $user ? substr($user, strpos($user, '-') + 1) : 0;
        $this->load->view('index', $this->data);
    }

    /**
     * Render JSON data for full calendar library
     * @return \CI_Output
     */
    public function api()
    {
        $employeeNumber = $this->uri->segment(3);
        $leaveData = [];
        $leaveRecords = $this->reportRepository->findAll($employeeNumber);
        $backgroundColor = '';
        foreach ($leaveRecords as $leaveRecord) {
            $dayOfTheWeek = intval(mdate('%N', strtotime($leaveRecord->leaveDate)));
            // only render from Monday to Friday
            if ($dayOfTheWeek <= 5) {
                if ($leaveRecord->leaveStatus === self::TAKEN) {
                    $backgroundColor = '#A7A9AC';
                } elseif ($leaveRecord->leaveStatus === self::APPROVED) {
                    $backgroundColor = '#00A852';
                } elseif ($leaveRecord->leaveStatus === self::PENDING_APPROVAL) {
                    $backgroundColor = '#F3971F';
                }

                $st = mdate('%H:%i', strtotime($leaveRecord->startTime));
                $startTime = ($st === '00:00') ? '08:00' : $st;
                $et = mdate('%H:%i', strtotime($leaveRecord->endTime));
                $endTime = ($et === '00:00') ? '16:00' : $et;
                // HRM sometimes bug on length hour/length day/start time/end time
                if (intval($leaveRecord->lengthHour) === 8 || intval($leaveRecord->lengthDay) === 1) {
                    $allDay = true;
                } else {
                    $leaveDuration = (int)mdate(strtotime($endTime)) - (int)mdate(strtotime($startTime));
                    $allDay = ($leaveDuration / 3600) === 8;
                }
                $leaveData[] = [
                    'title' => $leaveRecord->firstName . ' ' . $leaveRecord->lastName .' - ' . $leaveRecord->leaveType,
                    'url' => '/leave/user/' . $leaveRecord->username . '-' . $leaveRecord->employeeNumber,
                    'start' => $leaveRecord->leaveDate . 'T' . $startTime,
                    'end' => $leaveRecord->leaveDate . 'T' . $endTime,
                    'color' => $backgroundColor,
                    'allDay' => $allDay
                ];
            }
        }

        $json = file_get_contents('./holiday.json');
        $holidayRecords = json_decode($json);
        if ($holidayRecords) {
            $currentYear = intval(mdate('%Y', time()));
            foreach ($holidayRecords as $holidayRecord) {
                $leaveData[] = [
                    'title' => $holidayRecord->title,
                    'url' => '',
                    'start' => $currentYear . '-' . $holidayRecord->startMDT,
                    'end' => empty($holidayRecord->endMDT) ? '' : $currentYear . '-' . $holidayRecord->endMDT,
                    'color' => '#CF1F3F',
                    'allDay' => true
                ];

                // display public holiday for upcoming year
                $currentMonth = intval(mdate('%m', time()));
                if ($currentMonth === 12) {
                    $leaveData[] = [
                        'title' => $holidayRecord->title,
                        'url' => '',
                        'start' => ($currentYear + 1) . '-' . $holidayRecord->startMDT,
                        'end' => empty($holidayRecord->endMDT) ? '' : ($currentYear + 1) . '-' . $holidayRecord->endMDT,
                        'color' => '#CF1F3F',
                        'allDay' => true
                    ];
                }
            }
        }

        return $this->output->set_content_type('application/json', 'utf-8')
            ->set_status_header(200, 'success')
            ->set_output(json_encode($leaveData));
    }
}
