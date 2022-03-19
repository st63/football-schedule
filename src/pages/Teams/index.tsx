import { FC } from 'react'

import { Header } from '../../components/Header'
import { Team } from '../../components/Team'
import { Search } from '../../components/Search'
import { Pagination } from '../../components/Pagination'
import { Container, TeamsContainer } from './styles'
import { Loader } from '../../styles'
import { useTeamsList } from './hooks'
import loaderGif from '../../assets/images/loaderGif.gif'

export const Teams: FC = () => {
    const {
        filterTeams,
        loader,
        searchValue,
        changeSearchValue,
        pageNumbers,
        paginate,
        prevPage,
        nextPage,
        currentPage,
        pageCount,
    } = useTeamsList()

    return (
        <Container>
            <Header />
            <Search
                searchValue={searchValue}
                changeSearchValue={changeSearchValue}
            />
            {!loader ? (
                <>
                    <TeamsContainer>
                        {filterTeams.map(
                            ({ teamName, teamLogo, id }: Teams) => (
                                <Team
                                    key={id}
                                    teamName={teamName}
                                    teamLogo={teamLogo}
                                    id={id}
                                />
                            )
                        )}
                    </TeamsContainer>
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
                <Loader alt="Команды загружаются" src={loaderGif} />
            )}
        </Container>
    )
}
