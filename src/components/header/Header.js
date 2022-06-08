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



function Header () {

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" style={{ background: '#F5F5F5' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Menus />
                    <a href='/'><img src={Logo} alt='logo'/></a>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>

                    <Box className='remarks' sx={{ flexGrow: 20 }}>
                        <Tooltip title="Show Remarks">
                            <h4> <Button className='remark' onClick={handleOpenUserMenu}> Remarks </Button> </h4>
                        </Tooltip>

                        <Menu
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
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;

