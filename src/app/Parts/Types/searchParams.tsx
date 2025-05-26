export interface SearchParams {
    s?: string;
}

export interface Params {
    slug?: string;
    page?: number;
}

export interface SearchParamsInterface {
    params: Params;
    searchParams: SearchParams;
}