import { useEffect, useState, useCallback } from 'react'

import { getLeagues } from '../../api'
import { LEAGUES_PER_PAGE } from '../../constants'

export const useLeaguesList = () => {
    const [leagues, setLeagues] = useState<Leagues[]>([])
    const [filterLeagues, setFilterLeagues] = useState<Leagues[]>([])
    const [loader, setLoader] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')
    const [currentPage, setCurrentPage] = useState<number>(1)

    const lastIndexOnCurrentPage = currentPage * LEAGUES_PER_PAGE
    const firstIndexOnCurrentPage = lastIndexOnCurrentPage - LEAGUES_PER_PAGE
    const leaguesOnCurrentPage: Leagues[] = filterLeagues.slice(
        firstIndexOnCurrentPage,
        lastIndexOnCurrentPage
    )
    const pageCount = Math.ceil(filterLeagues.length / LEAGUES_PER_PAGE)

    const paginate = useCallback(
        (e: React.ChangeEvent<HTMLButtonElement>) =>
            setCurrentPage(+e.currentTarget.value),
        []
    )

    const nextPage = useCallback(
        () => setCurrentPage((currentPage) => currentPage + 1),
        []
    )

    const prevPage = useCallback(
        () => setCurrentPage((currentPage) => currentPage - 1),
        []
    )

    const changeSearchValue = useCallback((value: string) => {
        setSearchValue(value)
    }, [])

    useEffect(() => {
        const filterLeagues = leagues.filter(
            ({ leagueName }: { leagueName: string }) =>
                leagueName.toUpperCase().includes(searchValue.toUpperCase())
        )
        setFilterLeagues(filterLeagues)
    }, [searchValue, leagues])

    useEffect(() => {
        ;(async () => {
            setLoader(true)

            const leagues = await getLeagues()

            setLeagues(leagues)
            setFilterLeagues(leagues)
            setLoader(false)
        })()
    }, [])

    const pageNumbers = Array.from({ length: pageCount }, (v, k) => k + 1)

    return {
        filterLeagues: leaguesOnCurrentPage,
        loader,
        searchValue,
        changeSearchValue,
        pageNumbers,
        paginate,
        nextPage,
        prevPage,
        currentPage,
        pageCount,
    }
}
