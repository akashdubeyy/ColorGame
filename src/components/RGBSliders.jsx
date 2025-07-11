import { Box, Slider, Typography } from '@mui/material';

export default function RGBSliders({ userColor, correctColor, showCorrect, onChange }) {
  const renderSlider = (color) => {
    const userValue = userColor[color];
    const correctValue = correctColor[color];

    return (
      <Box key={color} my={2}>
        <Typography gutterBottom>{color.toUpperCase()}</Typography>
        <Slider
        value={userValue}
        onChange={(e, val) => onChange(color, val)}
        min={0}
        max={255}
        step={1}
        valueLabelDisplay="auto"
        marks={
            showCorrect
            ? [{ value: correctValue, label: `${correctValue}` }]
            : []
        }
        disabled={showCorrect} //lock slider after submit
        sx={{
            color: color,
            '& .MuiSlider-mark': {
            backgroundColor: '#444',
            height: 25,
            width: 2,
            marginTop: '0px',
            },
            '& .MuiSlider-markLabel': {
            color: '#444',
            fontSize: '0.75rem',
            marginTop: '2px', 
            },
        }}
        />
      </Box>
    );
  };

  return <Box>{['r', 'g', 'b'].map(renderSlider)}</Box>;
}
