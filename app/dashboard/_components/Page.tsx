import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { prisma } from "@/lib";

export default async function Page({ page }: { page: number }) {
  console.log("🚀 ~ Page ~ page:", page);
  const imageCount = await prisma.image.count();
  const perPage = +(process.env.PER_PAGE ?? 6);
  if (imageCount < perPage) return null;
  const pages = Math.ceil(imageCount / perPage);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={page <= 1}
            href={`/dashboard/?page=${page - 1}`}
          />
        </PaginationItem>
        {Array.from({ length: pages }).map((_, index) => {
          const currentPage = index + 1;
          return (
            <PaginationItem key={currentPage}>
              <PaginationLink
                aria-disabled={currentPage === page}
                isActive={currentPage === page}
                href={`/dashboard/?page=${currentPage}`}
              >
                {currentPage}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            aria-disabled={page >= Math.ceil(imageCount / perPage)}
            href={`/dashboard/?page=${page + 1}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
