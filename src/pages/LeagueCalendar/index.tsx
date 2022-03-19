import { FC } from 'react'

import { Header } from '../../components/Header'
import { Match } from '../../components/Match'
import { BreadCrumbs } from '../../components/BreadCrumbs'
import { SearchPeriod } from '../../components/SearchPeriod'
import { Pagination } from '../../components/Pagination'
import { Container, LeagueCalendarContainer } from './styles'
import { Cap, Notification, Loader } from '../../styles'
import { useCalendar, useCurrentEntity } from '../../hooks'
import loaderGif from '../../assets/images/loaderGif.gif'

export const LeagueCalendar: FC = () => {
    const { currentName } = useCurrentEntity()
    const {
        changeSearchInput,
        calendar,
        loader,
        searchStart,
        searchEnd,
        error,
        pageNumbers,
        paginate,
        prevPage,
        nextPage,
        currentPage,
        pageCount,
    } = useCalendar('Лиги')

    return (
        <Container>
            <Header />
            <BreadCrumbs page="Лиги" name={currentName} />
            <span>Матчи</span>
            <SearchPeriod changeSearchInput={changeSearchInput} />
            {searchStart && searchEnd ? (
                !loader ? (
                    calendar.length ? (
                        <LeagueCalendarContainer>
                            {error && (
                                <Notification>
                                    Извините, но мы используем бесплатную версию
                                    API, поэтому подробная информация по лиге{' '}
                                    {currentName} недоступна. Пожалуйста
                                    выберите другую лигу. А сейчас мы показываем
                                    вам тестовую страницу, для просмотра
                                    интерфейса.
                                </Notification>
                            )}
                            {calendar.map((match) => {
                                return <Match key={match.id} match={match} />
                            })}
                            <Pagination
                                pageCount={pageCount}
                                pageNumbers={pageNumbers}
                                paginate={paginate}
                                prevPage={prevPage}
                                nextPage={nextPage}
                                currentPage={currentPage}
                            />
                        </LeagueCalendarContainer>
                    ) : (
                        <Cap>
                            В лиге {currentName} нет матчей в выбранный период
                            времени
                        </Cap>
                    )
                ) : (
                    <Loader alt="Лиги загружаются" src={loaderGif} />
                )
            ) : (
                <Cap>Пожалуйста выберете период отчета</Cap>
            )}
        </Container>
    )
}
