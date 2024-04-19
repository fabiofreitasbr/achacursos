import axios from "axios";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

interface TagSingleProps extends LinkProps {
    children: String;
}
interface tagInfo {
    id: string;
    title: string;
    slug: string;
}

function TagSingle({children, href}:TagSingleProps ) {
    return (
        <div>
            <Link href={href}>
                <span className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-lg border md:border-2 border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white transition-all font-bold">
                    {children}
                </span>
            </Link>
        </div>
    )
}
export default async function BlogTags() {
    const tags = await axios.get(process.env.local_api + "tags/find");
    return (
        <div className="mb-2 md:mb-10">
            <h3 className="text-xl my-2 font-medium text-blue-500 uppercase">Tags</h3>
            <div className="my-2 flex flex-wrap md:block">
                {
                    tags.data.map((tagSingle:tagInfo) => (
                        <TagSingle key={tagSingle.id} href={"/tag/" + tagSingle.slug}>{tagSingle.title}</TagSingle>
                    ))
                }
            </div>
        </div>
    )
}