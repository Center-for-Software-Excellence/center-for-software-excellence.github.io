import { useMemo, useState } from 'react';

import {
  Pagination,
  // PaginationButton,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/common/ui/pagination';
import { Blog, Publication } from '@/config/home';
import { BlogCard } from '../home/blog-card';
import { ResearchCard } from '../home/research-card';

interface ResearchListProps {
  content: Publication[];
  itemsPerPage?: number;
}

interface BlogsListProps {
  content: Blog[];
  itemsPerPage?: number;
}

function ListPagination({
  currentPage = 1,
  goPage,
  numPages,
}: {
  currentPage?: number;
  goPage: (page: number) => void;
  numPages?: number;
}) {
  return (
    numPages &&
    numPages > 1 && (
      <Pagination>
        <PaginationContent className="my-8 flex w-lg items-center justify-between">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => goPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage <= 1}
            />
          </PaginationItem>
          {/* <div className="flex items-center gap-2"> */}
          {/*   {(() => { */}
          {/*     const pages: JSX.Element[] = []; */}
          {/*     const totalPages = numPages || 1; */}
          {/**/}
          {/*     if (totalPages <= 7) { */}
          {/*       // Show all pages if 7 or fewer */}
          {/*       for (let i = 1; i <= totalPages; i++) { */}
          {/*         pages.push( */}
          {/*           <PaginationItem key={i}> */}
          {/*             <PaginationButton */}
          {/*               onClick={() => goPage(i)} */}
          {/*               isActive={currentPage === i} */}
          {/*             > */}
          {/*               {i} */}
          {/*             </PaginationButton> */}
          {/*           </PaginationItem>, */}
          {/*         ); */}
          {/*       } */}
          {/*     } else { */}
          {/*       // Always show first page */}
          {/*       pages.push( */}
          {/*         <PaginationItem key={1}> */}
          {/*           <PaginationButton */}
          {/*             onClick={() => goPage(1)} */}
          {/*             isActive={currentPage === 1} */}
          {/*           > */}
          {/*             1 */}
          {/*           </PaginationButton> */}
          {/*         </PaginationItem>, */}
          {/*       ); */}
          {/**/}
          {/*       // Show ellipsis if current page is far from start */}
          {/*       if (currentPage > 3) { */}
          {/*         pages.push( */}
          {/*           <PaginationItem key="ellipsis-start"> */}
          {/*             <PaginationEllipsis /> */}
          {/*           </PaginationItem>, */}
          {/*         ); */}
          {/*       } */}
          {/**/}
          {/*       // Show pages around current page */}
          {/*       const startPage = Math.max(2, currentPage - 1); */}
          {/*       const endPage = Math.min(totalPages - 1, currentPage + 1); */}
          {/**/}
          {/*       for (let i = startPage; i <= endPage; i++) { */}
          {/*         pages.push( */}
          {/*           <PaginationItem key={i}> */}
          {/*             <PaginationButton */}
          {/*               onClick={() => goPage(i)} */}
          {/*               isActive={currentPage === i} */}
          {/*             > */}
          {/*               {i} */}
          {/*             </PaginationButton> */}
          {/*           </PaginationItem>, */}
          {/*         ); */}
          {/*       } */}
          {/**/}
          {/*       // Show ellipsis if current page is far from end */}
          {/*       if (currentPage < totalPages - 2) { */}
          {/*         pages.push( */}
          {/*           <PaginationItem key="ellipsis-end"> */}
          {/*             <PaginationEllipsis /> */}
          {/*           </PaginationItem>, */}
          {/*         ); */}
          {/*       } */}
          {/**/}
          {/*       // Always show last page */}
          {/*       pages.push( */}
          {/*         <PaginationItem key={totalPages}> */}
          {/*           <PaginationButton */}
          {/*             onClick={() => goPage(totalPages)} */}
          {/*             isActive={currentPage === totalPages} */}
          {/*           > */}
          {/*             {totalPages} */}
          {/*           </PaginationButton> */}
          {/*         </PaginationItem>, */}
          {/*       ); */}
          {/*     } */}
          {/**/}
          {/*     return pages; */}
          {/*   })()} */}
          {/* </div> */}

          <PaginationItem>
            <PaginationNext
              onClick={() => goPage(Math.min(currentPage + 1, numPages || 1))}
              disabled={currentPage >= (numPages || 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  );
}

// TODO: in future for performance purpose, we might need to get the publications page by page isntead of all at once
export function ResearchList({ content, itemsPerPage = 5 }: ResearchListProps) {
  const [page, setPage] = useState(1);
  const pageCount = useMemo(
    () => Math.ceil(content.length / itemsPerPage),
    [content.length, itemsPerPage],
  );
  const pagedItems = useMemo(
    () => content.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    [content, page, itemsPerPage],
  );
  const gotoPage = (newPage: number) => {
    if (newPage < 1) newPage = 1;
    if (newPage > pageCount) newPage = pageCount;
    console.log('setting page to ', newPage);
    setPage(newPage);
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {pagedItems.map((item, index) => (
          <ResearchCard pub={item} key={`research-${index}`} />
        ))}
      </div>
      <ListPagination
        currentPage={page}
        goPage={gotoPage}
        numPages={pageCount}
      />
    </div>
  );
}

export function BlogsList({ content, itemsPerPage = 5 }: BlogsListProps) {
  const [page, setPage] = useState(1);
  const pageCount = useMemo(
    () => Math.ceil(content.length / itemsPerPage),
    [content.length, itemsPerPage],
  );
  const pagedItems = useMemo(
    () => content.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    [content, page, itemsPerPage],
  );
  const gotoPage = (newPage: number) => {
    if (newPage < 1) newPage = 1;
    if (newPage > pageCount) newPage = pageCount;
    console.log('setting page to ', newPage);
    setPage(newPage);
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {pagedItems.map((item, index) => (
          <BlogCard blog={item} key={`blog-${index}`} clamp={true} />
        ))}
      </div>
      <ListPagination
        currentPage={page}
        goPage={gotoPage}
        numPages={pageCount}
      />
    </div>
  );
}
