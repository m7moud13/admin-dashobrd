import { useTheme } from '@emotion/react'
import React from 'react'
import { tokens } from '../themes'
import { Box } from '@mui/material'

export const Circle = ({size = "40" , progress = "0.75"}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const angle = progress * 360 
    return (
        <Box 
        sx={{
            background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                conic-gradient(transparent 0deg ${angle}deg, ${colors.blue[500]} ${angle}deg 360deg),
                ${colors.green[500]}`,
            borderRadius: "50%",
            width: `${size}px`,
            height: `${size}px`,
            }}
        >
            
        </Box>
    )
}
