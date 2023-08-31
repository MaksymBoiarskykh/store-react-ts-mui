interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  rating: IRating;
}
