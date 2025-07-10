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