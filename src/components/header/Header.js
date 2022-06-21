import React, {useState} from 'react';
import Logo from './logo.svg';
import './Header.css';
import Menus from '../menu/Menu';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { width } from '@mui/system';

const StyledMenu = styled((props) => (
    <Menu
    elevation={0}
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
    }}
    transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
    }}
    {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
    borderRadius: 5,
    marginTop: theme.spacing(0),
    minWidth: 180,
    color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
    },
}));

const theme = createTheme({
palette: {
    primary: {
    // WE color
    main: '#3BC2D7',
    },
    secondary: {
    main: '#ff00ff',
    },
},
});

function Header () {

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [leave_calendar_header, setLeave_header] = useState(false)

    const showLeave_header = (e) => {
    if (e.target.className.includes('mobile')) {
        setLeave_header(true)
    } else if (e.target.className.includes('desktop')){
        setLeave_header(false)
    }

}

    return (
        <AppBar position="fixed" style={{ background: '#F5F5F5'}}>
            <Container className='container' maxWidth="xxl">
                <Toolbar disableGutters>

                    <Menus className='menu-icon'> </Menus>
                    <Box className='logo'> 
                        <a className='logo-icon' href='/'><img src={Logo} alt='logo'/></a>
                    </Box>
                    
                    

                    <Box className='remarks' sx={{ flexGrow: 20 }}>
                        <Tooltip title="Show Remarks">
                            <h4> <ThemeProvider theme={theme}>  <Button className='remark' endIcon={<KeyboardArrowDownIcon />} onClick={handleOpenUserMenu} > Remarks </Button> </ThemeProvider> </h4>
                        </Tooltip>

                        <StyledMenu
                            sx={{ mt: '45px' }}
                            id="remarks-bar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >

                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography className='remark-tag current-day'> CURRENT DAY</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography className='remark-tag leave-taken'> LEAVE :: TAKEN </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography className='remark-tag leave-pending'> LEAVE :: PENDING </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography className='remark-tag leave-approved'> LEAVE :: APPROVED </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography className='remark-tag holiday'> PUBLIC HOLIDAY </Typography>
                                </MenuItem>
                        </StyledMenu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;

