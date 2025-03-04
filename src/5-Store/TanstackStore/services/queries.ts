import { useQueries, useQuery } from "@tanstack/react-query";
import { getAdminUser, getAllCategories, getAllDonations, getAllFilms, getAllPurchases, getAllUsers, getFilmContent, getSingleCategory } from "./api";

export function useGetAllCategories() {
    return useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
       
    });
}

export function useGetSingleCategory(id: String) {
    return useQuery({
        queryKey: ["category", id],
        queryFn: () => getSingleCategory(id),
       
    });
}

export function useGetAllFilms() {
    return useQuery({
        queryKey: ["films"],
        queryFn: getAllFilms,
       
    });
}

export function useGetFilm(id: String) {
    return useQuery({
        queryKey: ["film", id],
        queryFn: () => getFilmContent(id),
       
    });
}

export function useGetSingleFilms(ids: (any | undefined)[] | undefined) {
    return useQueries(
        {
            queries: (ids ?? [])?.map(( id ) => ({
                queryKey: ["singlefilms", { id }],
                queryFn: () => getFilmContent(id!),
            })),
        }
    )
}

export function useGetDonations() {
    return useQuery({
        queryKey: ["donations"],
        queryFn: () => getAllDonations(),
       
    });
}

export function useGetPurchases() {
    return useQuery({
        queryKey: ["purchases"],
        queryFn: () => getAllPurchases(),
       
    });
}

export function useGetUsers() {
    return useQuery(
        {
            queryKey: ["users"],
            queryFn: () => getAllUsers()
        }
    )
}

export function useGetAdminUser(id: String) {
    return useQuery(
        {
            queryKey: ["admin", id],
            queryFn: () => getAdminUser(id)
        }
    )
}

