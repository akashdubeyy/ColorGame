import { Box, Slider, Typography } from '@mui/material';

export default function RGBSliders({ userColor, onChange }) {
  return (
    <Box>
      {['r', 'g', 'b'].map((color) => (
        <Box key={color} my={2}>
          <Typography gutterBottom>{color.toUpperCase()}</Typography>
          <Slider
            value={userColor[color]}
            onChange={(e, val) => onChange(color, val)}
            min={0}
            max={255}
            sx={{ color: color }}
          />
        </Box>
      ))}
    </Box>
  );
}