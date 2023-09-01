import { useMemo } from "react";
import { IProduct } from "../models/IProduct";

export const useFiltering = (
  rating: number | null,
  data: IProduct[]
): IProduct[] => {
  const sortedData = useMemo(() => {
    if (rating) {
      console.log("sort");
      return [...data].filter((el) => Math.round(el.rating.rate) === rating);
    } else {
      return data;
    }
  }, [rating, data]);

  return sortedData;
};
