import { Box,Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { tokens } from '../../themes';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/CottageOutlined';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const Navbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [iscollapsed,setiscollapsed] = useState(true)
    const [isselected,setisselected] = useState('Dashboard')
    const Item = ({title,path,icon}) => {
        return(
            <Box color={colors.grey[100]} ml={'10px'} mt={'25px'} >
                <Link to={path} className='flex  items-center hover:text-[#5961d5] cursor-pointer w-fit'  onClick={() => setisselected(title)}>
                        <div className={isselected === title ? 'text-[1px] text-[#5961d5]' : 'text-[1px]'}>
                            {icon}
                        </div>
                        {iscollapsed ?
                        <Typography variant='h6' ml={'15px'} className={isselected === title ? 'text-[#5961d5]' : null}>
                            {title}
                        </Typography>
                        : null}
                </Link>
            </Box>
        )
    }
    return (
        <Box  bgcolor={colors.primary[400]} minHeight={'100vh'}  color={colors.grey[100]} className={iscollapsed ? "p-10 duration-300 w-[250px] " : "w-[90px] p-10 pl-5 justify-center duration-300"}>
                <Box className='flex flex-col justify-center'>
                    <div className='flex justify-between text-["#141414"] pb-8'>
                        {iscollapsed ?  <Typography variant='h4' color={colors.grey[100]}>ADMINIS</Typography> : undefined }
                        <div className=' cursor-pointer'>
                        <MenuOutlinedIcon  onClick={() => setiscollapsed(!iscollapsed)} />
                        </div>
                    </div>
                    {iscollapsed ?<Box className='flex flex-col justify-center mx-auto mb-5'>
                        <img src="./Help.jpg" alt="" className=' rounded-full h-32 mb-3 w-32 mx-auto  relative z-10'/> 
                        <Typography variant='h2' mx={'auto'}>M.K</Typography>
                        <Typography color={colors.green[500]}  mt={0.5} ml={1}> M.k Fancy Admin</Typography>
                    </Box> : undefined }
                    <Item 
                    title="Dashboard"
                    icon={<HomeOutlinedIcon />}
                    path={'/'}/>
                        <Box className='mt-5 mb-3'>
                                <Typography  fontSize={'14px'} color={colors.grey[300]} mb={'-8px'} >Data</Typography>
                                <Item 
                                title="Manage Team"
                                icon={<PeopleOutlinedIcon  fontSize='small'/>}
                                path={'/team'}
                                />
                                <Item 
                                title="Contacts Information"
                                icon={<ContactsOutlinedIcon  fontSize='small'/>}
                                path={'/contacts'}
                                />
                                <Item 
                                title="Invoices Balances"
                                icon={<ReceiptOutlinedIcon  fontSize='small'/>}
                                path={'/invoices'}
                                />
                        </Box>
                        <Box className='mt-5'>
                                <Typography  fontSize={'14px'} color={colors.grey[300]} mb={'-8px'}>Pages</Typography>
                                <Item 
                                title="profile Form"
                                icon={<PersonOutlinedIcon  fontSize='small'/>}
                                path={'/profile'}
                                />
                                <Item 
                                title="Calendar"
                                icon={<CalendarTodayOutlinedIcon  fontSize='small'/>}
                                path={'/calendar'}
                                />
                                <Item 
                                title="FAQ Page"
                                icon={<HelpOutlineOutlinedIcon  fontSize='small'/>}
                                path={'/FAQ'}
                                />
                        </Box>
                        <Box className='mt-5'>
                                <Typography  fontSize={'14px'} color={colors.grey[300]} mb={'-8px'}>Charts</Typography>
                                <Item 
                                title="Bar Chart"
                                icon={<BarChartOutlinedIcon  fontSize='small'/>}
                                path={'/bar/chart'}
                                />
                                <Item 
                                title="Pie Chart"
                                icon={<PieChartOutlineOutlinedIcon  fontSize='small'/>}
                                path={'/pie/chart'}
                                />
                                <Item 
                                title="Line Chart"
                                icon={<TimelineOutlinedIcon  fontSize='small'/>}
                                path={'/line/chart'}
                                />
                                <Item 
                                title="Geography Chart"
                                icon={<MapOutlinedIcon  fontSize='small'/>}
                                path={'/geography'}
                                />
                        </Box>
                    </Box>
        </Box>
    )
}
