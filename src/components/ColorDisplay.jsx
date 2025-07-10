import { Box, Typography } from '@mui/material';

export default function ColorDisplay({ targetColor, userColor }) {
  return (
    <Box display="flex" justifyContent="space-around" my={2}>
      <Box textAlign="center">
        <Typography variant="subtitle1">Target Color</Typography>
        <Box
          sx={{ width: 100, height: 100, backgroundColor: `rgb(${targetColor.r},${targetColor.g},${targetColor.b})`, border: '1px solid #000' }}
        />
      </Box>
      <Box textAlign="center">
        <Typography variant="subtitle1">Your Guess</Typography>
        <Box
          sx={{ width: 100, height: 100, backgroundColor: `rgb(${userColor.r},${userColor.g},${userColor.b})`, border: '1px solid #000' }}
        />
      </Box>
    </Box>
  );
}