import { AppBar, Toolbar, Typography, Select, MenuItem, Box } from '@mui/material';

export default function Navbar({ mode, onModeChange }) {
  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          HEXED
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body1">Mode:</Typography>
          <Select
            value={mode}
            onChange={(e) => onModeChange(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
              minWidth: 100,
              color: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.8)',
              },
              '& .MuiSvgIcon-root': {
                color: 'white',
              }
            }}
          >
            <MenuItem value="rgb">RGB</MenuItem>
            <MenuItem value="hex">HEX</MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
