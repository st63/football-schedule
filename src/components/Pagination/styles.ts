import styled from 'styled-components'

export const PaginationContainer = styled.div`
    display: flex;
    width: 100%;
`

export const PaginationInner = styled.div`
    margin: 0 auto;
`

export const Button = styled.button<{ active?: boolean }>`
    background-color: ${({ active }) => (active ? '#e0efff' : 'transparent')};
    margin: 0px 3px;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 4px;

    &:hover {
        cursor: pointer;
    }
`
