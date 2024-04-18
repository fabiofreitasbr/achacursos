import axios from "axios";

export default async function ContentArtigos({params, searchParams} : any) {
    const search = (searchParams.s) ? searchParams.s : "";
    const slug = (params.slug) ? params.slug : null;
    const page = (params.page) ? params.page : null;
    const courses = await axios.get('http://localhost:3001/cursos', {
        params: {
            search,
            slug,
            page
        }
    });
    return courses;
}