import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../../models/IProduct";

const link = "https://fakestoreapi.com/";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: link }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<IProduct[], string>({
      query: () => ({
        url: `products`,
      }),
    }),
  }),
});
