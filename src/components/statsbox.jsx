import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../themes'
import { Circle } from './Circle'

export const Statsbox = ({icon,title,stats,percentage= 0,progress= '0.80'}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
    <Box sx={{
        background:colors.primary[400],
        p:4,
        maxHeight:'150px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    }}>
        <Box>
        <Box color={colors.green[600]} mb={'3px'}>{icon}</Box>
        <Typography variant='h4' mb={'3px'} color={colors.grey[100]} fontWeight={'bold'}>{stats}</Typography>
        <Typography variant='h5' color={colors.green[500]}>{title}</Typography>
        </Box>
        <Box>
        <Box>
            <Circle progress={progress}/>
            <Box color={colors.green[600]} mt={'15px'}>
                +{percentage}%
            </Box>
        </Box>
        </Box>
    </Box>
)
}
export default Statsbox;