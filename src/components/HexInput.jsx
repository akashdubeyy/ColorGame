import { Box, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { isValidHex } from '../utils/colorUtils';

export default function HexInput({
  userHex,
  targetHex,
  showCorrect,
  onChange
}) {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    let value = e.target.value.trim().toUpperCase();

    // Auto-add # if not present and user starts typing
    if (value && !value.startsWith('#')) {
      value = '#' + value;
    }

    // Limit to 7 characters (#XXXXXX)
    if (value.length > 7) {
      value = value.substring(0, 7);
    }

    // Only allow valid hex characters
    const validChars = /^#[0-9A-F]*$/;
    if (!validChars.test(value)) {
      return; // Don't update if invalid characters
    }

    // Validate and set error
    if (value.length === 7) {
      if (isValidHex(value)) {
        setError('');
      } else {
        setError('Invalid hex format');
      }
    } else if (value.length > 0) {
      setError('Enter 6 hex digits');
    } else {
      setError('');
    }

    onChange(value);
  };

  return (
    <Box my={2}>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Enter Hex Color
      </Typography>
      <TextField
        value={userHex}
        onChange={handleChange}
        placeholder="#000000"
        disabled={showCorrect}
        error={!!error && !showCorrect}
        helperText={!showCorrect ? error : ''}
        fullWidth
        sx={{
          '& .MuiInputBase-input': {
            textAlign: 'center',
            fontSize: '1.2rem',
            fontFamily: 'monospace',
          }
        }}
      />

      {showCorrect && (
        <Box mt={2} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            Correct: {targetHex}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your guess: {userHex}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
