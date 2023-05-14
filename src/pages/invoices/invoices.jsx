import React from 'react'
import { PageTitle } from '../../components/PageTitle';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../themes';
import { mockDataInvoices } from '../../data/mockData';

const Invoices = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colums = [
    {field:"id",headerName:"ID"},
    {field:"name",headerName:"Name",flex:1},
    {field:"phone",headerName:"Phone Number",flex:1},
    {field:"email",headerName:"Email",flex:1},
    {field:"cost",headerName:"Cost",flex:1},
    {field:"date",headerName:"Data",flex:1}
  ]
  return (
    <>
      <Box
      m={'20px 0 0 0'} height={'75vh'} sx={{
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
        <PageTitle title="INVOICES" subtitle="List of Invoice Balances" />
        <DataGrid rows={mockDataInvoices} columns={colums} checkboxSelection/>
      </Box>
    </>
  )
}
export default Invoices;
