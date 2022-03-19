import { FC } from 'react'

import { Header } from '../../components/Header'
import { League } from '../../components/League'
import { Search } from '../../components/Search'
import { Pagination } from '../../components/Pagination'
import { Container, LeaguesContainer } from './styles'
import { Loader } from '../../styles'
import { useLeaguesList } from './hooks'
import loaderGif from '../../assets/images/loaderGif.gif'

export const Leagues: FC = () => {
    const {
        filterLeagues,
        loader,
        searchValue,
        changeSearchValue,
        pageNumbers,
        paginate,
        prevPage,
        nextPage,
        currentPage,
        pageCount,
    } = useLeaguesList()

    return (
        <Container>
            <Header />
            <Search
                searchValue={searchValue}
                changeSearchValue={changeSearchValue}
            />
            {!loader ? (
                <>
                    <LeaguesContainer>
                        {filterLeagues.map(
                            ({ leagueName, country, id }: Leagues) => (
                                <League
                                    key={id}
                                    leagueName={leagueName}
                                    country={country}
                                    id={id}
                                />
                            )
                        )}
                    </LeaguesContainer>
                    <Pagination
                        pageCount={pageCount}
                        pageNumbers={pageNumbers}
                        paginate={paginate}
                        prevPage={prevPage}
                        nextPage={nextPage}
                        currentPage={currentPage}
                    />
                </>
            ) : (
                <Loader alt="Лиги загружаются" src={loaderGif} />
            )}
        </Container>
    )
}
