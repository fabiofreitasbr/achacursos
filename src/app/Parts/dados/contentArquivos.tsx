import axios from "axios";
import { SearchParamsInterface } from "../Types/searchParams";


export default async function ContentArtigos({params, searchParams} : SearchParamsInterface) {
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