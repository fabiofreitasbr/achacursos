import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Params, SearchParams } from "../Types/searchParams";


export default function PaginationElement({ params, countTotal, pageCurrent, quantityPerPage, searchParams }: { params: Params, countTotal: number, pageCurrent: number, quantityPerPage: number, searchParams: SearchParams }) {

    const quantityPage = Math.max(1, Math.ceil(countTotal / quantityPerPage));

    const initialpage = (pageCurrent > 2) ? (pageCurrent - 2) : 1;
    const searchCurrent = (searchParams.s) ? "?s=" + searchParams.s : "";
    let rows = [];
    for (var n = initialpage; n <= quantityPage && n <= pageCurrent + 2; n++) {
        rows.push(n);
    }

    const preLink = (params.slug) ? "/tag/" + params.slug + "/p/" : "/blog/p/";
    if (quantityPage > 1) {
        return (
            <Pagination className='text-blue-500 my-4'>
                <PaginationContent>
                    {
                        pageCurrent > 1 ? (
                            <PaginationItem>
                                <PaginationPrevious className='hover:!text-orange-500 hover:bg-gray-100' href={preLink + (pageCurrent - 1) + searchCurrent} />
                            </PaginationItem>
                        ) : null
                    }
                    {
                        rows.map((row) => (
                            <PaginationItem key={row}>
                                <PaginationLink className='hover:!text-orange-500 hover:bg-gray-100' href={preLink + row + searchCurrent}>{row}</PaginationLink>
                            </PaginationItem>
                        ))
                    }
                    {
                        pageCurrent < quantityPage ? (
                            <PaginationItem>
                                <PaginationNext className='hover:!text-orange-500 hover:bg-gray-100' href={preLink + (pageCurrent + 1) + searchCurrent} />
                            </PaginationItem>
                        ) : null
                    }
                </PaginationContent>
            </Pagination>
        )
    }
    return null;
}