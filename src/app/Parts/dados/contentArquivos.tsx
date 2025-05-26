import axios from "axios";

export interface SearchParams {
    s?: string;
}

export interface Params {
    slug?: string;
    page?: number;
}

export default async function ContentArtigos({params, searchParams} : { params: Params, searchParams: SearchParams }) {
    const search = (searchParams.s) ? searchParams.s : "";
    const slug = (params.slug) ? params.slug : null;
    const page = (params.page) ? params.page : null;
    
    // await new Promise(resolve => setTimeout(resolve, 3000));

    const courses = await axios.get(process.env.local_api + "cursos/find", {
        params: {
            search,
            slug,
            page
        }
    });
    return courses;
}