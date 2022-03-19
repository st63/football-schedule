import { FC } from 'react'

import { Container, Name, Logo } from './styles'

type TeamProps = {
    teamName: string
    teamLogo: string
    id: number
}

export const Team: FC<TeamProps> = ({ teamName, teamLogo, id }) => {
    return (
        <Container to={`/team-calendar/${id}/?${teamName}`}>
            <Name>{teamName}</Name>
            <Logo alt={teamName} src={teamLogo} />
        </Container>
    )
}
