import { Box, Typography } from '@mui/material';

export default function ColorDisplay({ targetColor, userColor, mode, targetHex, userHex, showResult }) {
  return (
    <Box display="flex" justifyContent="space-around" my={2}>
      <Box textAlign="center">
        <Typography variant="subtitle1">Target Color</Typography>
        <Box
          sx={{ width: 100, height: 100, backgroundColor: `rgb(${targetColor.r},${targetColor.g},${targetColor.b})`, border: '1px solid #000', mb: 1 }}
        />
        {mode === 'hex' && showResult && (
          <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
            {targetHex}
          </Typography>
        )}
      </Box>
      <Box textAlign="center">
        <Typography variant="subtitle1">Your Guess</Typography>
        <Box
          sx={{ width: 100, height: 100, backgroundColor: `rgb(${userColor.r},${userColor.g},${userColor.b})`, border: '1px solid #000', mb: 1 }}
        />
        {mode === 'hex' && showResult && userHex && (
          <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
            {userHex}
          </Typography>
        )}
      </Box>
    </Box>
  );
}