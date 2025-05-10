// import { i18n } from '../i18n';

export interface Product {
  id: string;
  nameKey: string;
  descriptionKey: string;
  category: 'drone' | 'hydrogen' | 'parts';
  imageUrl: string;
  specs?: {
    [key: string]: string | number;
  };
  features?: string[];
}

export const products: Product[] = [
  // 无人机产品
  {
    id: 'h100-drone',
    nameKey: 'products.h100.name',
    descriptionKey: 'products.h100.description',
    category: 'drone',
    imageUrl: '/images/products/产品-擎天H100.jpg',
    specs: {
      flightTime: 120, // 分钟
      maxPayload: 15, // 公斤
      range: 150, // 公里
      maxSpeed: 65, // km/h
    },
    features: [
      'products.h100.feature1',
      'products.h100.feature2',
      'products.h100.feature3',
    ],
  },
  {
    id: 'h25-drone',
    nameKey: 'products.h25.name',
    descriptionKey: 'products.h25.description',
    category: 'drone',
    imageUrl: '/images/products/产品-青鸾H25.jpg',
    specs: {
      flightTime: 60, // 分钟
      maxPayload: 5, // 公斤
      range: 80, // 公里
      maxSpeed: 45, // km/h
    },
    features: [
      'products.h25.feature1',
      'products.h25.feature2',
      'products.h25.feature3',
    ],
  },
  
  // 氢能产品
  {
    id: 'hits-fuelcell',
    nameKey: 'products.hits.name',
    descriptionKey: 'products.hits.description',
    category: 'hydrogen',
    imageUrl: '/images/products/产品-HiTS系列燃料电池.jpg',
    specs: {
      power: '3-10kW',
      efficiency: '55%',
      lifespan: '5000h',
    },
    features: [
      'products.hits.feature1',
      'products.hits.feature2',
      'products.hits.feature3',
    ],
  },
  {
    id: 'h-bike',
    nameKey: 'products.hbike.name',
    descriptionKey: 'products.hbike.description',
    category: 'hydrogen',
    imageUrl: '/images/products/产品-氢电共享两轮车.jpg',
    specs: {
      range: 100, // 公里
      refuelTime: 3, // 分钟
      maxSpeed: 25, // km/h
    },
    features: [
      'products.hbike.feature1',
      'products.hbike.feature2',
      'products.hbike.feature3',
    ],
  },
  {
    id: 'h-cart',
    nameKey: 'products.hcart.name',
    descriptionKey: 'products.hcart.description',
    category: 'hydrogen',
    imageUrl: '/images/products/产品-氢能观光车.jpg',
    specs: {
      seats: 8,
      range: 200, // 公里
      refuelTime: 5, // 分钟
    },
    features: [
      'products.hcart.feature1',
      'products.hcart.feature2',
      'products.hcart.feature3',
    ],
  },
  
  // 零部件产品
  {
    id: 'refuel-port',
    nameKey: 'products.refuelport.name',
    descriptionKey: 'products.refuelport.description',
    category: 'parts',
    imageUrl: '/images/products/产品-加氢口.jpg',
    specs: {
      pressure: '35MPa/70MPa',
      material: 'products.refuelport.material',
      certification: 'ISO/TS 19880-1:2016',
    },
    features: [
      'products.refuelport.feature1',
      'products.refuelport.feature2',
      'products.refuelport.feature3',
    ],
  },
  {
    id: 'cylinder-valve',
    nameKey: 'products.valve.name',
    descriptionKey: 'products.valve.description',
    category: 'parts',
    imageUrl: '/images/products/产品-瓶口阀.jpg',
    specs: {
      pressure: '35MPa/70MPa',
      material: 'products.valve.material',
      certification: 'ISO 17268:2020',
    },
    features: [
      'products.valve.feature1',
      'products.valve.feature2',
      'products.valve.feature3',
    ],
  },
  {
    id: 'pressure-reducer',
    nameKey: 'products.reducer.name',
    descriptionKey: 'products.reducer.description',
    category: 'parts',
    imageUrl: '/images/products/产品-减压阀岛.jpg',
    specs: {
      inputPressure: '35MPa/70MPa',
      outputPressure: '0.1-1.6MPa',
      flowRate: '0-150NL/min',
    },
    features: [
      'products.reducer.feature1',
      'products.reducer.feature2',
      'products.reducer.feature3',
    ],
  },
];

// 根据类别获取产品
export const getProductsByCategory = (category: 'drone' | 'hydrogen' | 'parts'): Product[] => {
  return products.filter(product => product.category === category);
};

// 根据ID获取产品
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// 获取所有产品
export const getAllProducts = (): Product[] => {
  return products;
}; 