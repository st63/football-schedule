import { FC } from 'react'

import { Header } from '../../components/Header'
import { Match } from '../../components/Match'
import { BreadCrumbs } from '../../components/BreadCrumbs'
import { SearchPeriod } from '../../components/SearchPeriod'
import { Pagination } from '../../components/Pagination'
import { Container, TeamCalendarContainer } from './styles'
import { Cap, Notification, Loader } from '../../styles'
import { useCalendar, useCurrentEntity } from '../../hooks'
import loaderGif from '../../assets/images/loaderGif.gif'

export const TeamCalendar: FC = () => {
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
    } = useCalendar('Команды')

    return (
        <Container>
            <Header />
            <BreadCrumbs page="Команды" name={currentName} />
            <span>Матчи</span>
            <SearchPeriod changeSearchInput={changeSearchInput} />

            {searchStart && searchEnd ? (
                !loader ? (
                    calendar.length ? (
                        <TeamCalendarContainer>
                            {error && (
                                <Notification>
                                    Извините, но мы используем бесплатную версию
                                    API, поэтому подробная информация по команде{' '}
                                    {currentName} недоступна. Пожалуйста
                                    выберите другую команду. А сейчас мы
                                    показываем вам тестовую страницу, для
                                    просмотра интерфейса.
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
                        </TeamCalendarContainer>
                    ) : (
                        <Cap>
                            Команда {currentName} не играла{' '}
                            {'(не будет играть)'} в выбранный период времени
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
