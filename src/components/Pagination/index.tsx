import { FC } from 'react'

import { PaginationContainer, PaginationInner, Button } from './styles'

type PaginationProps = {
    pageCount: number
    pageNumbers: number[] | []
    paginate: (e: any) => void
    prevPage: () => void
    nextPage: () => void
    currentPage: number
}

export const Pagination: FC<PaginationProps> = ({
    pageCount,
    pageNumbers,
    paginate,
    prevPage,
    nextPage,
    currentPage,
}) => (
    <PaginationContainer>
        <PaginationInner>
            <Button disabled={currentPage === 1} onClick={prevPage}>
                {'<'}
            </Button>
            {pageNumbers.map((number) => (
                <Button
                    onClick={paginate}
                    active={currentPage === number}
                    value={number}
                    key={number}
                >
                    {number}
                </Button>
            ))}
            <Button disabled={currentPage === pageCount} onClick={nextPage}>
                {'>'}
            </Button>
        </PaginationInner>
    </PaginationContainer>
)
