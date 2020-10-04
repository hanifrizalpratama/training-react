const DummyProducts = [
  {
    id: 1,
    name: "Teton Pullover Hoodie",
    price: "Rp. 1.120.000",
    description: "Teton Pullover Hoodie is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "https://b2cdemo.getswift.asia/media/catalog/product/cache/50dfd146a0eaf4fd913e00072e909ed4/m/h/mh02-black_main.jpg",
  },
  {
    id: 2,
    name: "Marco Lightweight Hoodie",
    price: "Rp. 1.184.000",
    description: "Marco Lightweight Active Hoodie is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "https://b2cdemo.getswift.asia/media/catalog/product/cache/50dfd146a0eaf4fd913e00072e909ed4/m/h/mh13-blue_main.jpg",
  },
];

const DummyCategory = [
  {
    id: 1,
    name: 'Men',
    child: [
      {
        id: 6,
        name: 'Tops',
      },
      {
        id: 7,
        name: 'Bottom',
      },
    ],
  },
  {
    id: 2,
    name: 'Women',
    child: [],
  },
  {
    id: 3,
    name: 'Gear',
    child: [],
  },
  {
    id: 4,
    name: 'Training',
    child: [],
  },
  {
    id: 5,
    name: 'Sale',
    child: [],
  },
];

export {DummyProducts, DummyCategory};
