import React from 'react'
import { PageTitle } from '../../components/PageTitle';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../../themes';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/mockData';

const Contactsinfo = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colunms = [
    {field:"id",headerName:"ID"},
    {field:"registrarId",headerName:"REgistar ID"},
    {field:"name",headerName:"Name",cellClassName: "name-column--cell",flex:1},
    {field:"age",headerName:"Age",type:"number"},
    {field:"phone",headerName:"phone Number",flex:1},
    {field:"email",headerName:"Email",flex:1},
    {field:"address",headerName:"Address",flex:1},
    {field:"city",headerName:"City",flex:1},
    {field:"zipCode",headerName:"zip Code",flex:1}
  ]
  return (
    <>
      <Box height={'75vh'} sx={{
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}width={'99%'}>
        <PageTitle title="CONTACTS" subtitle="List of Contacts for Future Reference" />
        <DataGrid  rows={mockDataContacts} columns={colunms} components={{Toolbar:GridToolbar}} />
      </Box>
    </>
  )
}
export default Contactsinfo;


