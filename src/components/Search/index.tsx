import { FC, useCallback } from 'react'

import { SearchInput } from './styles'

type SearchProps = {
    searchValue: string
    changeSearchValue: (value: string) => void
}

export const Search: FC<SearchProps> = ({ searchValue, changeSearchValue }) => {
    const onChangeSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            changeSearchValue(e.target.value)
        },
        [changeSearchValue]
    )

    return (
        <SearchInput
            placeholder="Поиск"
            value={searchValue}
            onChange={onChangeSearch}
        />
    )
}
