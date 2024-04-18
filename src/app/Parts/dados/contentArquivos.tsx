import axios from "axios";

export default async function ContentArtigos({params, searchParams} : any) {
    const search = (searchParams.s) ? searchParams.s : "";
    const slug = (params.slug) ? params.slug : null;
    const page = (params.page) ? params.page : null;
    const courses = await axios.get('https://api.achacursos.com.brcursos/find', {
        params: {
            search,
            slug,
            page
        }
    });
    return courses;
}