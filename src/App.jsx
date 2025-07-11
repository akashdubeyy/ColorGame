import { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import ColorDisplay from './components/ColorDisplay';
import RGBSliders from './components/RGBSliders';
import AccuracyResult from './components/AccuracyResult';
import { getRandomColor, calculateAccuracy } from './utils/colorUtils';

function App() {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [userColor, setUserColor] = useState({ r: 0, g: 0, b: 0 });
  const [showResult, setShowResult] = useState(false);
  const [accuracy, setAccuracy] = useState(null);

  const handleSliderChange = (channel, value) => {
    setUserColor((prev) => ({ ...prev, [channel]: value }));
  };

  const handleSubmit = () => {
    const score = calculateAccuracy(userColor, targetColor);
    setAccuracy(score);
    setShowResult(true);
  };

  const handleReset = () => {
    setTargetColor(getRandomColor());
    setUserColor({ r: 0, g: 0, b: 0 });
    setShowResult(false);
    setAccuracy(null);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        RGB Color Match Game
      </Typography>
      <ColorDisplay targetColor={targetColor} userColor={userColor} />
      <RGBSliders
        userColor={userColor}
        correctColor={targetColor}
        showCorrect={showResult}
        onChange={handleSliderChange}
      />
      {!showResult ? (
        <Box textAlign="center" mt={3}>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Box>
      ) : (
        <AccuracyResult accuracy={accuracy} onReset={handleReset} />
      )}
    </Container>
  );
}

export default App;