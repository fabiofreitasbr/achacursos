import axios from "axios";
import { Params, SearchParams } from "../Types/searchParams";

export default async function ContentArtigos({params, searchParams} : { params: Promise<Params>, searchParams: Promise<SearchParams> }) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const search = (resolvedSearchParams.s) ? resolvedSearchParams.s : "";
    const slug = (resolvedParams.slug) ? resolvedParams.slug : null;
    const page = (resolvedParams.page) ? resolvedParams.page : null;
    
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