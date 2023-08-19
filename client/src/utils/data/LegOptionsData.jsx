import StandardHairpin from '../../assets/images/legs/standard_hairpin.jpg';
import Hairpin from '../../assets/images/legs/hairpin_three_prong.jpg';
import SquareFrame from '../../assets/images/legs/square_frame.jpg';
import AFrame from '../../assets/images/legs/a_frame.jpg';
import XFrame from '../../assets/images/legs/x_frame.jpg';

export const LegData = [
  {
    id: 'standard_hairpin',
    name: 'Standard hairpin',
    imageUrl: StandardHairpin,
    height: 300,
    cost: 0,
    type: 'hairpin',
  },
  {
    id: 'hairpin_three_prong',
    name: 'Hairpin three prong',
    imageUrl: Hairpin,
    height: 400,
    cost: 20,
    type: 'hairpin',
  },
  {
    id: 'square_frame',
    name: 'Square frame',
    imageUrl: SquareFrame,
    height: 400,
    cost: 70,
    type: 'square',
  },
  {
    id: 'a_frame',
    name: 'A frame',
    imageUrl: AFrame,
    height: 300,
    cost: 70,
    type: 'a',
  },
  {
    id: 'x_frame',
    name: 'X frame',
    imageUrl: XFrame,
    height: 400,
    cost: 70,
    type: 'x',
  },
];

export const legPriceData = [
  {
    cost: 20,
    id: 'standard_hairpin',
    name: 'Standard Hairpin 300mm',
  },
  {
    cost: 20,
    id: 'hairpin_three_prong',
    name: 'Hairpin Three Prong 400mm',
  },
  {
    cost: 20,
    id: 'a_frame_small',
    name: 'A Frame small L350 H400 mm'
  },
  {
    cost: 20,
    id: 'a_frame_large',
    name: 'A Frame large L690 H710 mm'
  },
  {
    cost: 20,
    id: 'x_frame_small',
    name: 'X Frame L350 H400 mm'
  },
  {
    cost: 20,
    id: 'x_frame_large',
    name: 'X Frame L500 H710 mm'
  },
  {
    cost: 20,
    id: 'square_frame_small',
    name: 'Sq Frame small L350 H400 mm'
  },
  {
    cost: 20,
    id: 'square_frame_medium',
    name: 'Sq Frame medium L500 H710 mm'
  },
  {
    cost: 20,
    id: 'square_frame_large',
    name: 'Sq Frame large L500 H710 mm'
  },
  {
    cost: 20,
    id: 'square_frame_xlarge',
    name: 'Sq Frame X large L800 H710 mm'
  },
];
