export type PaginationType = {
    elementPerPage: number,
    totalPage: number,
    currentPage: number,
    setCurrentPage: (page: number) => void;
    buttonClass?: string;
    buttonActiveClass?: string;
    navigationButtonClass?: string;
    navigationPrevContent?: React.ReactNode | string;
    navigationNextContent?: React.ReactNode | string;
    paginationClass?: string;
}