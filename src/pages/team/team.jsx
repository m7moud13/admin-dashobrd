import React from 'react'
import { PageTitle } from '../../components/PageTitle'
import { tokens } from '../../themes';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

export const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
    {field:"id",headerName:"ID"},
    {field:"name",headerName:"Name",flex:1,cellClassName: "name-column--cell"},
    {field:"age",headerName:"Age",typeof:"number"},
    {field:"phone",headerName:"Pohone Number",flex:1},
    {field:"email",headerName:"Email",flex:1},
    {field:"accessLevel",headerName:"Access Level",flex:1,
    renderCell:({row : {access} }) => {
        return(
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mx:'auto',p:'4px',borderRadius:'4px',width:'60%'}} bgcolor={access === "admin" ? colors.green[600]: colors.green[700]}>
            {access === "admin" ? <AdminPanelSettingsOutlinedIcon /> : null}
            {access === "manager" ? <SecurityOutlinedIcon /> : null}
            {access === "user" ? <LockOpenOutlinedIcon /> : null}
            <Typography color={colors.grey[100]} ml="1px" fontSize={'13px'}>
                {access}
            </Typography>
        </Box>
        )
    }
    }
]
    return (
        <>
        <Box m={'20px 0 0 0'} height={'75vh'} sx={{
            "& .MuiDataGrid-root": {
                border: "none",
            },
            "& .MuiDataGrid-cell": {
                borderBottom: "none",
            },
            "& .name-column--cell": {
                color: colors.green[300],
            },
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blue[700],
                borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blue[700],
            },
            "& .MuiCheckbox-root": {
                color: `${colors.green[200]} !important`,
            },
            }}width={'99%'}>
            <PageTitle  title="TEAM" subtitle="Managing the Team Members"/>
            <DataGrid columns={columns}  rows={mockDataTeam} checkboxSelection  />
        </Box>
        </>
    )
}
