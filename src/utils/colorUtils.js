export function calculateAccuracy(userRGB, targetRGB) {
    const dist = Math.sqrt(
      ['r', 'g', 'b'].reduce((sum, key) => sum + Math.pow(userRGB[key] - targetRGB[key], 2), 0)
    );
    const maxDist = Math.sqrt(3 * 255 * 255);
    return Math.round((1 - dist / maxDist) * 100);
  }

  export function getRandomColor() {
    return {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    };
  }

  // Converts hex string "#FF5733" to RGB object { r: 255, g: 87, b: 51 }
  export function hexToRgb(hex) {
    const cleaned = hex.replace('#', '');

    const r = parseInt(cleaned.substring(0, 2), 16);
    const g = parseInt(cleaned.substring(2, 4), 16);
    const b = parseInt(cleaned.substring(4, 6), 16);

    return { r, g, b };
  }

  // Converts RGB object { r: 255, g: 87, b: 51 } to hex string "#FF5733"
  export function rgbToHex(rgb) {
    const toHex = (value) => {
      const hex = value.toString(16).toUpperCase();
      return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
  }

  // Validates hex format: must be #XXXXXX where X is 0-9 or A-F
  export function isValidHex(hex) {
    if (!hex.startsWith('#') || hex.length !== 7) {
      return false;
    }

    const hexPattern = /^#[0-9A-F]{6}$/i;
    return hexPattern.test(hex);
  }