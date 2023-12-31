/**
 * Generated by orval v6.19.0 🍺
 * Do not edit manually.
 * json-placeholder API
 * json-placeholder API
 * OpenAPI spec version: 1.0.0
 */
import { useQuery } from "@tanstack/react-query";
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import * as axios from "@/config/axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { Photo } from ".././types";

/**
 * @summary Get a list of photos
 */
export const getPhotos = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<Photo[]>> => {
  return axios.default.get(`/photos`, options);
};

export const getGetPhotosQueryKey = () => {
  return [`/photos`] as const;
};

export const getGetPhotosQueryOptions = <
  TData = Awaited<ReturnType<typeof getPhotos>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getPhotos>>, TError, TData>;
  axios?: AxiosRequestConfig;
}) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPhotosQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPhotos>>> = ({
    signal,
  }) => getPhotos({ signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getPhotos>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetPhotosQueryResult = NonNullable<
  Awaited<ReturnType<typeof getPhotos>>
>;
export type GetPhotosQueryError = AxiosError<unknown>;

/**
 * @summary Get a list of photos
 */
export const useGetPhotos = <
  TData = Awaited<ReturnType<typeof getPhotos>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getPhotos>>, TError, TData>;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetPhotosQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Get a photo by ID
 */
export const getPhotosPhotoId = (
  photoId: number,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<Photo>> => {
  return axios.default.get(`/photos/${photoId}`, options);
};

export const getGetPhotosPhotoIdQueryKey = (photoId: number) => {
  return [`/photos/${photoId}`] as const;
};

export const getGetPhotosPhotoIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getPhotosPhotoId>>,
  TError = AxiosError<unknown>,
>(
  photoId: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getPhotosPhotoId>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetPhotosPhotoIdQueryKey(photoId);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getPhotosPhotoId>>
  > = ({ signal }) => getPhotosPhotoId(photoId, { signal, ...axiosOptions });

  return {
    queryKey,
    queryFn,
    enabled: !!photoId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getPhotosPhotoId>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetPhotosPhotoIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getPhotosPhotoId>>
>;
export type GetPhotosPhotoIdQueryError = AxiosError<unknown>;

/**
 * @summary Get a photo by ID
 */
export const useGetPhotosPhotoId = <
  TData = Awaited<ReturnType<typeof getPhotosPhotoId>>,
  TError = AxiosError<unknown>,
>(
  photoId: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getPhotosPhotoId>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetPhotosPhotoIdQueryOptions(photoId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};
