import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Params, SearchParams } from "../Types/searchParams";


export default async function PaginationElement({ params, countTotal, pageCurrent, quantityPerPage, searchParams }: { params: Promise<Params>, countTotal: number, pageCurrent: number, quantityPerPage: number, searchParams: Promise<SearchParams> }) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const quantityPage = Math.max(1, Math.ceil(countTotal / quantityPerPage));

    const initialpage = (pageCurrent > 2) ? (pageCurrent - 2) : 1;
    const searchCurrent = (resolvedSearchParams.s) ? "?s=" + resolvedSearchParams.s : "";
    let rows = [];
    for (var n = initialpage; n <= quantityPage && n <= pageCurrent + 2; n++) {
        rows.push(n);
    }

    const preLink = (resolvedParams.slug) ? "/tag/" + params.slug + "/p/" : "/blog/p/";
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