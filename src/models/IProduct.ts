interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  [key: string]: any;
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  rating: IRating;
  category: string;
}
