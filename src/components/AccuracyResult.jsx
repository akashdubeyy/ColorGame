import { Box, Typography, Button } from '@mui/material';

export default function AccuracyResult({ accuracy, onReset }) {
  return (
    <Box textAlign="center" my={2}>
      <Typography variant="h6">Accuracy: {accuracy}%</Typography>
      <Button variant="contained" onClick={onReset} sx={{ mt: 2 }}>Try New Color</Button>
    </Box>
  );
}