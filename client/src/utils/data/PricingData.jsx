export const PriceData = {
  startingPrice: 220,
  protection: 55,
  stone_edge: 50,
  coasters: 50,
  colour: 3,
  pricePerCentimeter: 1,
  oak: 120, // per square meter
  mdf: 30,
  pine: 80,
};

export const InitialDesignData = {
  length: 85,
  width: 55,
  thickness: 25,
  squareMeter: 0.46,
  material: 'mdf',
  finish: 'marble',
  colours: [
    { id: 0, value: 'black', label: 'black' },
    { id: 1, value: 'white', label: 'white' },
    { id: 2, value: 'silver', label: 'silver' },
    { id: 3, value: 'brown', label: 'brown' },
    { id: 4, value: 'lightbrown', label: 'lightbrown' },
  ],
  legs: 'Standard fit 30cm high 2 prong hairpin legs',
  quote: 220,
  protection: false,
  stone_edge: false,
  coasters: false,
};
