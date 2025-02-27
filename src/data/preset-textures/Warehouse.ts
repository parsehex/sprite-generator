export const Warehouse: TextureDescription = {
  name: 'abandoned-warehouse',
  size: 128,
  layers: [
    // Main building structure - faded red brick
    {
      type: 'rect',
      color: '#8b4343',
      x: 10,
      y: 20,
      width: 108,
      height: 90,
    },
    // Concrete foundation
    {
      type: 'rect',
      color: '#696969',
      x: 8,
      y: 100,
      width: 112,
      height: 10,
    },
    // Roof structure - corrugated metal
    {
      type: 'rect',
      color: '#4a4a4a',
      x: 5,
      y: 15,
      width: 118,
      height: 15,
    },
    // Roof detail lines
    {
      type: 'line',
      color: '#363636',
      x: 5,
      y: 18,
      x2: 123,
      y2: 18,
      lineWidth: 1,
    },
    {
      type: 'line',
      color: '#363636',
      x: 5,
      y: 22,
      x2: 123,
      y2: 22,
      lineWidth: 1,
    },
    {
      type: 'line',
      color: '#363636',
      x: 5,
      y: 26,
      x2: 123,
      y2: 26,
      lineWidth: 1,
    },
    // Large loading door - damaged
    {
      type: 'rect',
      color: '#595959',
      x: 30,
      y: 60,
      width: 40,
      height: 40,
    },
    // Loading door damage
    {
      type: 'line',
      color: '#333333',
      x: 30,
      y: 60,
      x2: 70,
      y2: 100,
      lineWidth: 2,
    },
    {
      type: 'line',
      color: '#333333',
      x: 30,
      y: 100,
      x2: 70,
      y2: 60,
      lineWidth: 2,
    },
    // Side door
    {
      type: 'rect',
      color: '#4d4d4d',
      x: 85,
      y: 75,
      width: 15,
      height: 25,
    },
    // Broken windows (multiple)
    {
      type: 'rect',
      color: '#1a1a1a',
      x: 20,
      y: 35,
      width: 15,
      height: 10,
    },
    {
      type: 'rect',
      color: '#1a1a1a',
      x: 45,
      y: 35,
      width: 15,
      height: 10,
    },
    {
      type: 'rect',
      color: '#1a1a1a',
      x: 70,
      y: 35,
      width: 15,
      height: 10,
    },
    {
      type: 'rect',
      color: '#1a1a1a',
      x: 95,
      y: 35,
      width: 15,
      height: 10,
    },
    // Broken window details
    {
      type: 'line',
      color: '#4a5660',
      x: 20,
      y: 35,
      x2: 35,
      y2: 45,
      lineWidth: 1,
    },
    {
      type: 'line',
      color: '#4a5660',
      x: 95,
      y: 35,
      x2: 110,
      y2: 45,
      lineWidth: 1,
    },
    // Water damage/stains
    {
      type: 'rect',
      color: '#6b3939',
      x: 15,
      y: 45,
      width: 25,
      height: 40,
    },
    {
      type: 'rect',
      color: '#6b3939',
      x: 75,
      y: 50,
      width: 30,
      height: 35,
    },
    // Graffiti suggestion
    {
      type: 'line',
      color: '#c4c4c4',
      x: 90,
      y: 60,
      x2: 105,
      y2: 70,
      lineWidth: 3,
    },
    // Exposed brick/damage spots
    {
      type: 'circle',
      color: '#6b2727',
      x: 25,
      y: 85,
      radius: 5,
    },
    {
      type: 'circle',
      color: '#6b2727',
      x: 100,
      y: 65,
      radius: 6,
    },
    // Rusty drain pipe
    {
      type: 'rect',
      color: '#8b6b4a',
      x: 110,
      y: 30,
      width: 4,
      height: 70,
    },
  ],
}
