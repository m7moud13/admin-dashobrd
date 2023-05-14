import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from '../themes';

export const PageTitle = ({title,subtitle}) => {
    const theme =  useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Box mb={3} >
            <Typography variant='h2' pb={1} fontWeight={'bold'} color={colors.grey[100]}>
                {title}
            </Typography>
            <Typography color={colors.green[500]} variant='h5'>
                {subtitle}
            </Typography>
        </Box>
    )
}
