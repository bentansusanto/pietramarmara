import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface StrapiResponse<T> {
  data: T
  meta?: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface ImageFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface StrapiImage {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    thumbnail: ImageFormat
    small?: ImageFormat
    medium?: ImageFormat
    large?: ImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: any | null
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface ProductCategory {
  id: number
  documentId: string
  name_category: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Product {
  id: number
  documentId: string
  name_product: string
  description: any
  createdAt: string
  updatedAt: string
  publishedAt: string
  pietra_product_category?: ProductCategory
  thumbnail?: StrapiImage
  images?: StrapiImage[]
}

export const pietraApi = createApi({
  reducerPath: 'pietraApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337/api/',
  }),
  endpoints: builder => ({
    getCategories: builder.query<StrapiResponse<ProductCategory[]>, void>({
      query: () => 'pietra-product-categories',
    }),
    getProducts: builder.query<StrapiResponse<Product[]>, void>({
      query: () => 'pietra-products?populate=*',
    }),
    getProductById: builder.query<StrapiResponse<Product>, string>({
      query: id => `pietra-products/${id}?populate=*`,
    }),
  }),
})

export const { useGetCategoriesQuery, useGetProductsQuery, useGetProductByIdQuery } = pietraApi
