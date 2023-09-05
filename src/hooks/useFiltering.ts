import { useMemo } from "react";
import { IProduct } from "../models/IProduct";

export const useFiltering = (
  rating: number | null,
  category: string,
  priceRange: number[],
  data: IProduct[] = []
): IProduct[] => {
  const sortedData = useMemo(() => {
    if (rating) {
      data = data.filter((el) => Math.round(el.rating.rate) === rating);
    }
    if (priceRange) {
      data = data.filter(
        (el) => el.price >= priceRange[0] && el.price <= priceRange[1]
      );
    }
    if (category) {
      data = data.filter((el) => el.category === category);
    }
    return data;
  }, [rating, priceRange, data, category]);

  return sortedData;
};
