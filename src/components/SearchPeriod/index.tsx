import { FC } from 'react'

import { Container, SearchInput } from './styles'

type SearchPeriodProps = {
    changeSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchPeriod: FC<SearchPeriodProps> = ({ changeSearchInput }) => {
    return (
        <Container>
            <span>С</span>
            <SearchInput
                type="date"
                name="start"
                onChange={changeSearchInput}
            />
            <span>по</span>
            <SearchInput type="date" name="end" onChange={changeSearchInput} />
        </Container>
    )
}
