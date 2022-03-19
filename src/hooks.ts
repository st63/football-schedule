import { useState, useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {
    getTeamCalendar,
    getLeagueCalendar,
    getTestLeagueCalendar,
    getTestTeamCalendar,
} from './api'
import { CALENDAR_PER_PAGE } from './constants'

export const useCurrentEntity = () => {
    const { pathname, search } = useLocation()

    const splitPath = pathname.split('/')
    const id: string = splitPath[splitPath.length - 1]
    const currentName = search.replace('?', '').replaceAll('%20', ' ')

    return {
        id,
        currentName,
    }
}

export const useCalendar = (page: 'Лиги' | 'Команды') => {
    const [calendar, setCalendar] = useState<Calendar[]>([])
    const [searchStart, setSearchStart] = useState<string>('')
    const [searchEnd, setSearchEnd] = useState<string>('')
    const [loader, setLoader] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const { id } = useCurrentEntity()
    const [currentPage, setCurrentPage] = useState<number>(1)

    const lastIndexOnCurrentPage = currentPage * CALENDAR_PER_PAGE
    const firstIndexOnCurrentPage = lastIndexOnCurrentPage - CALENDAR_PER_PAGE
    const calendarOnCurrentPage: Calendar[] = calendar.slice(
        firstIndexOnCurrentPage,
        lastIndexOnCurrentPage
    )
    const pageCount = Math.ceil(calendar.length / CALENDAR_PER_PAGE)

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

    const fetchCalendar = useCallback(
        async (start: string, end: string, page: string) => {
            setLoader(true)

            try {
                const calendar =
                    page === 'Лиги'
                        ? await getLeagueCalendar(start, end, id)
                        : await getTeamCalendar(start, end, id)

                setError(false)
                setCalendar(calendar)
            } catch (error) {
                const calendar =
                    page === 'Лиги'
                        ? await getTestLeagueCalendar()
                        : await getTestTeamCalendar()

                setCalendar(calendar)
                setError(true)
            } finally {
                setLoader(false)
            }
        },
        [id]
    )

    const changeSearchInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputName = e.target.name as 'start' | 'end'
            const inputValue = e.target.value

            const changeSearchState = {
                start: (value: string) => setSearchStart(value),
                end: (value: string) => setSearchEnd(value),
            }

            changeSearchState[inputName](inputValue)
        },
        []
    )

    useEffect(() => {
        if (searchStart && searchEnd) {
            fetchCalendar(searchStart, searchEnd, page)
        }
    }, [searchStart, searchEnd, fetchCalendar, page])

    const pageNumbers = Array.from({ length: pageCount }, (v, k) => k + 1)

    return {
        calendar: calendarOnCurrentPage,
        changeSearchInput,
        loader,
        searchStart,
        searchEnd,
        error,
        pageNumbers,
        paginate,
        nextPage,
        prevPage,
        currentPage,
        pageCount,
    }
}
