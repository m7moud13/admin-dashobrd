import { Box,IconButton,Input, InputBase, useTheme } from '@mui/material'
import React, { useContext, useState } from 'react'
import { context, tokens } from '../../themes';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
    const theme =  useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(context)
    return (
        <Box className='flex justify-between items-center mb-12'>
            <Box  sx={{borderRadius:1,background:colors.primary[400]}} > 
            <InputBase sx={{color:colors.grey[300],width:180,fontSize:13,pl:1,}} placeholder='Search'/>
            <IconButton type='button'>
                <SearchIcon fontSize='small' />
            </IconButton>
            </Box>
            <Box display={'flex'}>
                <IconButton type='button' onClick={colorMode.togglecolormode}>
                    {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon  /> :<LightModeOutlinedIcon  /> }
                </IconButton>
                <IconButton  >
                    <NotificationsOutlinedIcon />
                </IconButton >
                <IconButton >
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton >
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}
export default Header;