import React from 'react'
import { PageTitle } from '../../components/PageTitle';
import { Box, Button, IconButton, Typography } from '@mui/material';
import Statsbox from '../../components/statsbox';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import { useTheme } from '@emotion/react';
import { tokens } from '../../themes';
import { LIneChart } from '../../components/LIneChart';
import DownloadIcon from '@mui/icons-material/Download';
import { mockTransactions } from '../../data/mockData'; 
import { Circle } from '../../components/Circle';
import Geography from '../Geography/geography';
import Barchart from '../BarChart/barchart';
import Barofchart from '../../components/BarChart';
const Home = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <>
      <Box justifyContent={'space-between'} display={'flex'} alignItems={'center'}>
        <PageTitle title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Button 
            sx={{
            backgroundColor: colors.blue[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            }}>
            Download Report
            </Button>
      </Box>
      <Box className='grid grid-rows-[1fr,1.7fr,1fr] h-fit'>
        <Box className='grid lg:grid-cols-4 gap-5  h-fit mb-10 lg:mb-0 w-[450px] lg:w-auto' > 
          <Statsbox title={'Emails Sent'} icon={<EmailIcon fontSize='large'/>} stats={'12,361'} percentage={'14'} />
          <Statsbox title={'Sales Obtained'} icon={<PointOfSaleIcon fontSize='large'/>} stats={'431,225'} percentage={'21'} progress={'0.60'}/>
          <Statsbox title={'New Clients'} icon={<PersonAddIcon fontSize='large'/>} stats={'32,441'} percentage={'5'} progress={'0.42'}/>
          <Statsbox title={'Traffic Received'} icon={<TrafficIcon fontSize='large'/>} stats={'1,325,134'} percentage={'43'} progress={'0.85'}/>
        </Box>
        <Box className='grid lg:grid-cols-[1.99fr,1fr] gap-5 lg:mt-[-32px] h-fit w-[450px] lg:w-full'>
          <Box bgcolor={colors.primary[400]} p={2}  maxHeight={'300px'}>
              <Box sx={{
                  display:'flex',
                  justifyContent:'space-between',
                  alignItems:'center',
                  px:3,
                  mb:'-10px'
                }}>
                  <Box>
                    <Typography variant='h4' mb={'1px'} color={colors.grey[100]}>Revenue Generated</Typography>
                    <Typography variant='h3' color={colors.green[500]} fontWeight={'bold'}>$55,142.32</Typography>
                  </Box>
                  <Box>
                <IconButton>
                  <DownloadIcon sx={{color:colors.green[500]}} />  
                </IconButton>
              </Box>
            </Box>
          <LIneChart isDashboard={true}  height={'250px'}/>
          </Box>
          <Box sx={{
            background: colors.primary[400],
            maxHeight:'300px',
            overflow:'auto'
          }}>
            <Typography variant='h5' p={'15px'} borderBottom={`${colors.primary[500]} 4px solid`}color={colors.grey[100]}>Recent Transactions</Typography>
            <Box>
            {mockTransactions.map((stats) => (
              <Box sx={{ 
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center',
              p:'15px',
              borderBottom:`${colors.primary[500]} 4px solid`,
            overflow:'auto',
              }}>
                <Typography  color={colors.green[500]} variant='h5'>{stats.txId} <Typography display={'block'} color={colors.grey[100]}>{stats.user}</Typography></Typography>
                <Box>{stats.date}</Box>
                <Box sx={{
                  borderRadius:'4px',
                  background:colors.green[500],
                  p:'3px 8px',
                  color:colors.grey[100],
                  width:'fit'
                }}>{stats.cost}</Box>
              </Box>
            ))}
            </Box>
          </Box>
        </Box>
        <Box className='grid mt-[-500px] lg:grid-cols-3 gap-5 h-fit lg:mt-[-48px] w-[450px] lg:w-auto'>
            <Box sx={{p:3,background:colors.primary[400],maxHeight:'350px'}}>
              <Typography variant='h5' fontWeight={'bold'}>Campaign</Typography>
              <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',}}>
                <Box height={'180px'}>
                  <Box sx={{display:'flex',justifyContent:'center',mb:2}}><Circle  size='110' /></Box>
                  <Typography variant='h4' color={colors.green[500]} mt={'3px'}>$48,352 revenue generated 
                  <Typography display={'block'} color={colors.grey[100]} variant='h6'>Includes extra misc expenditures and costs</Typography>
                  </Typography>
                  </Box>
              </Box>
            </Box>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',background:colors.primary[400],flexDirection:'column'}}>
                <Typography variant='h5' color={colors.grey[100] } mr={'auto'} ml={'20px'} mt={'15px'}>Sales Quantity</Typography>
                <Barofchart isDashboard={true}/>
            </Box>
            <Box p={3} bgcolor={colors.primary[400]} >
                <Typography fontWeight={'bold'} variant='h5' color={colors.grey[100]}>Geography Based Traffic</Typography>
                <Geography isDashboard={true}/>
            </Box>
        </Box>
      </Box>
    </>
  )
}
export default Home;