export type PaginationProps = {
  total: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export interface PageProps {
  isActive: boolean;
}
