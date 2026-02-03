import { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import Navbar from './components/Navbar';
import ColorDisplay from './components/ColorDisplay';
import RGBSliders from './components/RGBSliders';
import HexInput from './components/HexInput';
import AccuracyResult from './components/AccuracyResult';
import { getRandomColor, calculateAccuracy, hexToRgb, rgbToHex, isValidHex } from './utils/colorUtils';

function App() {
  const [mode, setMode] = useState('rgb');
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [userColor, setUserColor] = useState({ r: 0, g: 0, b: 0 });
  const [userHex, setUserHex] = useState('#000000');
  const [showResult, setShowResult] = useState(false);
  const [accuracy, setAccuracy] = useState(null);

  // Derived state - convert target color to hex for display
  const targetHex = rgbToHex(targetColor);

  const handleModeChange = (newMode) => {
    // Reset game when mode changes
    setMode(newMode);
    setTargetColor(getRandomColor());
    setUserColor({ r: 0, g: 0, b: 0 });
    setUserHex('#000000');
    setShowResult(false);
    setAccuracy(null);
  };

  const handleSliderChange = (channel, value) => {
    setUserColor((prev) => ({ ...prev, [channel]: value }));
  };

  const handleHexChange = (hex) => {
    setUserHex(hex);

    // Update userColor for live preview if valid hex
    if (isValidHex(hex)) {
      const rgb = hexToRgb(hex);
      setUserColor(rgb);
    }
  };

  const handleSubmit = () => {
    // In hex mode, only allow submit if hex is valid
    if (mode === 'hex' && !isValidHex(userHex)) {
      return;
    }

    const score = calculateAccuracy(userColor, targetColor);
    setAccuracy(score);
    setShowResult(true);
  };

  const handleReset = () => {
    setTargetColor(getRandomColor());
    setUserColor({ r: 0, g: 0, b: 0 });
    setUserHex('#000000');
    setShowResult(false);
    setAccuracy(null);
  };

  return (
    <>
      <Navbar mode={mode} onModeChange={handleModeChange} />
      <Container maxWidth="sm">
        <ColorDisplay
          targetColor={targetColor}
          userColor={userColor}
          mode={mode}
          targetHex={targetHex}
          userHex={userHex}
          showResult={showResult}
        />

        {mode === 'rgb' ? (
          <RGBSliders
            userColor={userColor}
            correctColor={targetColor}
            showCorrect={showResult}
            onChange={handleSliderChange}
          />
        ) : (
          <HexInput
            userHex={userHex}
            targetHex={targetHex}
            showCorrect={showResult}
            onChange={handleHexChange}
          />
        )}

        {!showResult ? (
          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={mode === 'hex' && !isValidHex(userHex)}
            >
              Submit
            </Button>
          </Box>
        ) : (
          <AccuracyResult accuracy={accuracy} onReset={handleReset} />
        )}
      </Container>
    </>
  );
}

export default App;