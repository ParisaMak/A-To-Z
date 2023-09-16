import { createApi, fetchBaseQuery } from  '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
    },
  }),
  endpoints: (builder) => ({
    fetchCategories: builder.query({
      query: () => '/categories/list?lang=en&country=nl',
      transformResponse: (response) => {
        const categories = response || [];
        const categoriesGroup = Array.isArray(categories)
         ? categories.filter((category) => {
              return (
               category.CatName === 'Men' ||
                  category.CatName === 'Women' ||
                  category.CatName === 'Divided' ||
                  category.CatName === 'H&M HOME' ||
                  category.CatName === 'Beauty' ||
                  category.CatName === 'Sport'
              );
            })
          : [];
        return categoriesGroup;
      },
    }),

    fetchProductsByConcept: builder.query({
      query: (concept) => `/products/list?lang=en&country=nl&concepts=${concept}&currentpage=0&pagesize=5`,
    }),

    fetchProductsByTagCodes: builder.query({
      query: (tagCodes) => `/products/list?lang=en&country=nl&categories=${tagCodes}&currentpage=0&pagesize=30`,
      transformResponse: (response) => {
        return response?response.results:[];
       }
    }),
    fetchProductsByProductCodes: builder.query({
      query: (productcode) => `/products/detail?lang=en&country=nl&productcode=${productcode}`,
      transformResponse: (response) => {
        return (response)?response?.product.articlesList:[];
       }
    }),
    fetchProductsByProductCode: builder.query({
      query: (productcode) => `/products/detail?lang=en&country=nl&productcode=${productcode}`,
      transformResponse: (response) => {
        return (response)?response?.product:[];
       }
    }),
    fetchProductsByContext: builder.query({
      query: (context) =>
        `/products/list?lang=en&country=nl&contexts=${context}&currentpage=0&pagesize=5`,
    }),
  }),
});
export const {
  useFetchCategoriesQuery,
  useFetchProductsByConceptQuery,
  useFetchProductsByContextQuery,
  useFetchProductsByTagCodesQuery,
  useFetchProductsByProductCodeQuery,
  useFetchProductsByProductCodesQuery
} = categoriesApi;
