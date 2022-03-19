import { FC } from 'react'

import { Container, Name, Country } from './styles'

type LeagueProps = {
    leagueName: string
    country: string
    id: number
}

export const League: FC<LeagueProps> = ({ leagueName, country, id }) => {
    return (
        <Container to={`/league-calendar/${id}/?${leagueName}`}>
            <Name>{leagueName}</Name>
            <Country>{country}</Country>
        </Container>
    )
}
