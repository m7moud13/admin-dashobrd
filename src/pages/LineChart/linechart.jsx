import React from 'react'
import { PageTitle } from '../../components/PageTitle'
import { Box, useTheme } from '@mui/material'
import { tokens } from '../../themes'
import { LIneChart } from '../../components/LIneChart'
export const Linechart = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <>
      <PageTitle title="Line Chart" subtitle="Simple Line Chart" />
      <Box height={'75vh'} width={'99%'}>
        <LIneChart height={'75vh'} />
      </Box>
    </>
  )
}
export default Linechart