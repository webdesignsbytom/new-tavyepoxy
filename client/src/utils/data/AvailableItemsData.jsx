// OS1
import OSx1 from '../../assets/images/tables/ocean_sky_one_1.png';
import OSx3 from '../../assets/images/tables/ocean_sky_one_3.png';
import OSx6 from '../../assets/images/tables/ocean_sky_one_6.png';
import OSx7 from '../../assets/images/tables/ocean_sky_one_7.png';
import OSx9 from '../../assets/images/tables/ocean_sky_one_9.png';
import OSx11 from '../../assets/images/tables/ocean_sky_one_11.png';
import OSx12 from '../../assets/images/tables/ocean_sky_one_12.png';
import OSx13 from '../../assets/images/tables/ocean_sky_one_13.png';
import OSx15 from '../../assets/images/tables/ocean_sky_one_15.png';
import OSx16 from '../../assets/images/tables/ocean_sky_one_16.png';
import OSx17 from '../../assets/images/tables/ocean_sky_one_17.png';
// OS2
import OSy2 from '../../assets/images/tables/ocean_sky_two_2.png';
import OSy3 from '../../assets/images/tables/ocean_sky_two_3.png';
import OSy4 from '../../assets/images/tables/ocean_sky_two_4.png';
import OSy5 from '../../assets/images/tables/ocean_sky_two_5.png';
import OSy6 from '../../assets/images/tables/ocean_sky_two_6.png';
import OSy7 from '../../assets/images/tables/ocean_sky_two_7.png';
import OSy8 from '../../assets/images/tables/ocean_sky_two_8.png';
import OSy9 from '../../assets/images/tables/ocean_sky_two_9.png';
import OSy10 from '../../assets/images/tables/ocean_sky_two_10.png';
// ST1
import STx1 from '../../assets/images/tables/stone_one_1.png';
import STx2 from '../../assets/images/tables/stone_one_2.png';
import STx3 from '../../assets/images/tables/stone_one_3.png';
import STx4 from '../../assets/images/tables/stone_one_4.png';
import STx5 from '../../assets/images/tables/stone_one_5.png';
import STx6 from '../../assets/images/tables/stone_one_6.png';
import STx7 from '../../assets/images/tables/stone_one_7.png';
import STx8 from '../../assets/images/tables/stone_one_8.png';
// ST2
import STy1 from '../../assets/images/tables/stone_two_1.png';
import STy2 from '../../assets/images/tables/stone_two_2.png';
import STy3 from '../../assets/images/tables/stone_two_3.png';
import STy4 from '../../assets/images/tables/stone_two_4.png';
import STy5 from '../../assets/images/tables/stone_two_5.png';
import STy6 from '../../assets/images/tables/stone_two_6.png';
import STy7 from '../../assets/images/tables/stone_two_7.png';
import STy8 from '../../assets/images/tables/stone_two_8.png';
import STy9 from '../../assets/images/tables/stone_two_9.png';
import STy10 from '../../assets/images/tables/stone_two_10.png';
// WS1
import WSx1 from '../../assets/images/tables/striation_one_1.png';
import WSx2 from '../../assets/images/tables/striation_one_2.png';
import WSx3 from '../../assets/images/tables/striation_one_3.png';
import WSx4 from '../../assets/images/tables/striation_one_4.png';
import WSx5 from '../../assets/images/tables/striation_one_5.png';
import WSx6 from '../../assets/images/tables/striation_one_6.png';
// WS2
import WSy1 from '../../assets/images/tables/striation_two_1.png';
import WSy2 from '../../assets/images/tables/striation_two_2.png';
import WSy3 from '../../assets/images/tables/striation_two_3.png';
import WSy4 from '../../assets/images/tables/striation_two_4.png';
import WSy5 from '../../assets/images/tables/striation_two_5.png';
import WSy6 from '../../assets/images/tables/striation_two_6.png';
import WSy7 from '../../assets/images/tables/striation_two_7.png';
import WSy8 from '../../assets/images/tables/striation_two_8.png';
import WSy9 from '../../assets/images/tables/striation_two_9.png';
import WSy10 from '../../assets/images/tables/striation_two_10.png';
// WS3
import WSz1 from '../../assets/images/tables/striation_three_1.png';
import WSz2 from '../../assets/images/tables/striation_three_2.png';
import WSz3 from '../../assets/images/tables/striation_three_3.png';
import WSz4 from '../../assets/images/tables/striation_three_4.png';
import WSz5 from '../../assets/images/tables/striation_three_5.png';
// Videos
import OSxVideo from '../../assets/video/ST1video.mp4';
import OSyVideo from '../../assets/video/ST1video.mp4';
import STxVideo from '../../assets/video/ST1video.mp4';
import STyVideo from '../../assets/video/ST1video.mp4';
import WSxVideo from '../../assets/video/ST1video.mp4';
import WSyVideo from '../../assets/video/ST1video.mp4';
import WSzVideo from '../../assets/video/ST1video.mp4';

export const AvailableItemsArray = [
  // {
  //     id: 'sampleID',
  //     name: 'Table',
  //     price: 200,
  //     shipping: 24,
  //     onSale: false,
  //     desc: 'Table well made'
  //     images: []
  // }
  {
    id: 1,
    name: 'Striation Table',
    url: 'striation_table_one',
    price: 240,
    shipping: 24,
    onSale: false,
    desc: 'Beautiful wood style striations with vibrant solid and metallic colours. One of the best selling designs we have and are always unique. This table is made to be a stunning yet affordable epoxy resin coffee table. Glass smooth epoxy table top with a pattern that flows over the edges for an effect that looks like it was cut from a piece of wood. Hand made and crafted in Devon.',
    pageData: {
      videoLinks: WSxVideo,
      subtitle: 'Natural wood vein design',
      undercoat: 'Black',
      timber: 'MDF',
      legs: 'Metal pin legs',
      height: '30cm',
      dimensions: '85x55x2.5cm',
      images: [WSx1, WSx2, WSx3, WSx4, WSx5, WSx6],
    },
  },
  {
    id: 2,
    name: 'Striation Table',
    url: 'striation_table_two',
    price: 240,
    shipping: 24,
    onSale: false,
    desc: 'Beautiful wood style striations with vibrant solid and metallic colours. One of the best selling designs we have and are always unique. This table is made to be a stunning yet affordable epoxy resin coffee table. Glass smooth epoxy table top with a pattern that flows over the edges for an effect that looks like it was cut from a piece of wood. Hand made and crafted in Devon.',
    pageData: {
      videoLinks: WSyVideo,
      subtitle: 'Natural wood vein design',
      undercoat: 'Black',
      timber: 'MDF',
      legs: 'Metal pin legs',
      height: '30cm',
      dimensions: '85x55x2.5cm',
      images: [WSy1, WSy2, WSy3, WSy4, WSy5, WSy6, WSy7, WSy8, WSy9, WSy10],
    },
  },
  {
    id: 3,
    name: 'Striation Table',
    url: 'striation_table_three',
    price: 240,
    shipping: 24,
    onSale: false,
    desc: 'Beautiful wood style striations with vibrant solid and metallic colours. One of the best selling designs we have and are always unique. This table is made to be a stunning yet affordable epoxy resin coffee table. Glass smooth epoxy table top with a pattern that flows over the edges for an effect that looks like it was cut from a piece of wood. Hand made and crafted in Devon.',
    pageData: {
      videoLinks: WSzVideo,
      subtitle: 'Natural wood vein design',
      undercoat: 'Black',
      timber: 'MDF',
      legs: 'Metal pin legs',
      height: '30cm',
      dimensions: '85x55x2.5cm',
      images: [WSz1, WSz2, WSz3, WSz4, WSz5],
    },
  },
  {
    id: 4,
    name: 'Natural Stone Table',
    url: 'stone_table_one',
    price: 200,
    shipping: 24,
    onSale: false,
    desc: 'Stone effect with layers of detail, the colours in these are made by mixing natural metallics and earthy colours. This table is made to be a stunning yet affordable epoxy resin coffee table. Glass smooth epoxy table top with a pattern that flows over the edges for an effect that looks like it was cut from a piece of wood. Hand made and crafted in Devon.',
    pageData: {
      videoLinks: STxVideo,
      subtitle: 'Natural wood vein design',
      undercoat: 'Black',
      timber: 'MDF',
      legs: 'Metal pin legs',
      height: '30cm',
      dimensions: '85x55x2.5cm',
      images: [STx1, STx2, STx3, STx4, STx5, STx6, STx7, STx8],
    },
  },
  {
    id: 5,
    name: 'Natural Stone Table',
    url: 'stone_table_two',
    price: 200,
    shipping: 24,
    onSale: false,
    desc: 'Stone effect with layers of detail, the colours in these are made by mixing natural metallics and earthy colours. This table is made to be a stunning yet affordable epoxy resin coffee table. Glass smooth epoxy table top with a pattern that flows over the edges for an effect that looks like it was cut from a piece of wood. Hand made and crafted in Devon.',
    pageData: {
      videoLinks: STyVideo,
      subtitle: 'Natural wood vein design',
      undercoat: 'Black',
      timber: 'MDF',
      legs: 'Metal pin legs',
      height: '30cm',
      dimensions: '85x55x2.5cm',
      images: [STy1, STy2, STy3, STy4, STy5, STy6, STy7, STy8, STy9, STy10],
    },
  },
  {
    id: 6,
    name: 'Ocean Sky Table',
    url: 'ocean_sky_one',
    price: 150,
    shipping: 24,
    onSale: true,
    desc: 'Blues, black, white and greys combine to make such a natural splash of colours that you can stare at for hours. This table is made to be a stunning yet affordable epoxy resin coffee table. Glass smooth epoxy table top with a pattern that flows over the edges for an effect that looks like it was cut from a piece of wood. Hand made and crafted in Devon.',
    pageData: {
      videoLinks: OSxVideo,
      subtitle: 'Natural wood vein design',
      undercoat: 'Black',
      timber: 'MDF',
      legs: 'Metal pin legs',
      height: '30cm',
      dimensions: '85x55x2.5cm',
      images: [
        OSx1,
        OSx3,
        OSx6,
        OSx7,
        OSx9,
        OSx11,
        OSx12,
        OSx13,
        OSx15,
        OSx16,
        OSx17,
      ],
    },
  },
  {
    id: 7,
    name: 'Ocean Sky Table',
    url: 'ocean_sky_two',
    price: 150,
    shipping: 24,
    onSale: true,
    desc: 'Blues, black, white and greys combine to make such a natural splash of colours that you can stare at for hours. This table is made to be a stunning yet affordable epoxy resin coffee table. Glass smooth epoxy table top with a pattern that flows over the edges for an effect that looks like it was cut from a piece of wood. Hand made and crafted in Devon.',
    pageData: {
      videoLinks: OSyVideo,
      subtitle: 'Natural wood vein design',
      undercoat: 'Black',
      timber: 'MDF',
      legs: 'Metal pin legs',
      height: '30cm',
      dimensions: '85x55x2.5cm',
      images: [OSy2, OSy3, OSy4, OSy5, OSy6, OSy7, OSy8, OSy9, OSy10],
    },
  },
];
