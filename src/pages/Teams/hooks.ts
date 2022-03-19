import { useEffect, useState, useCallback } from 'react'

import { getTeams } from '../../api'
import { TEAMS_PER_PAGE } from '../../constants'

export const useTeamsList = () => {
    const [teams, setTeams] = useState<Teams[]>([])
    const [filterTeams, setFilterTeams] = useState<Teams[]>([])
    const [loader, setLoader] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')
    const [currentPage, setCurrentPage] = useState<number>(1)

    const lastIndexOnCurrentPage = currentPage * TEAMS_PER_PAGE
    const firstIndexOnCurrentPage = lastIndexOnCurrentPage - TEAMS_PER_PAGE
    const teamsOnCurrentPage: Teams[] = filterTeams.slice(
        firstIndexOnCurrentPage,
        lastIndexOnCurrentPage
    )
    const pageCount = Math.ceil(filterTeams.length / TEAMS_PER_PAGE)

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
        const filterTeams = teams.filter(({ teamName }: { teamName: string }) =>
            teamName.toUpperCase().includes(searchValue.toUpperCase())
        )
        setFilterTeams(filterTeams)
    }, [searchValue, teams])

    useEffect(() => {
        ;(async () => {
            setLoader(true)

            const teams = await getTeams()

            setTeams(teams)
            setFilterTeams(teams)
            setLoader(false)
        })()
    }, [])

    const pageNumbers = Array.from({ length: pageCount }, (v, k) => k + 1)

    return {
        filterTeams: teamsOnCurrentPage,
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
