import { FC } from 'react'

import { Container, MatchItem, Inner } from './styles'

const statuses = {
    SCHEDULED: 'Запланирован',
    LIVE: 'В прямом эфире',
    IN_PLAY: 'В игре',
    PAUSED: 'Пауза',
    FINISHED: 'Завершен',
    POSTPONED: 'Отложен',
    SUSPENDED: 'Приостановлен',
    CANCELED: 'Отменен',
}

export const Match: FC<{ match: Calendar }> = ({ match }) => {
    const { date, status, homeTeam, awayTeam, fullTime, extraTime, penalties } =
        match

    const formatDate = new Date(date).toLocaleDateString()
    const formatTime = new Date(date).toLocaleTimeString().slice(0, -3)

    const showFullTime =
        fullTime.homeTeam !== null && fullTime.awayTeam !== null
    const showExtraTime =
        extraTime.homeTeam !== null && extraTime.awayTeam !== null
    const showPenalties =
        penalties.homeTeam !== null && penalties.awayTeam !== null

    return (
        <Container>
            <Inner>
                <MatchItem>{formatDate}</MatchItem>
                <MatchItem>{formatTime}</MatchItem>
            </Inner>
            <Inner>
                <MatchItem>{statuses[status]}</MatchItem>
                <MatchItem>{homeTeam}</MatchItem>
            </Inner>
            <MatchItem>-</MatchItem>
            <Inner>
                <MatchItem>{awayTeam}</MatchItem>
                <MatchItem>
                    {showFullTime && (
                        <>
                            <span>{fullTime.homeTeam}:</span>
                            <span>{fullTime.awayTeam} </span>
                        </>
                    )}
                    {showFullTime && showExtraTime && (
                        <>
                            <span>
                                {'('}
                                {extraTime.homeTeam}:
                            </span>
                            <span>
                                {extraTime.awayTeam}
                                {')'}{' '}
                            </span>
                        </>
                    )}
                    {showFullTime && showExtraTime && showPenalties && (
                        <>
                            <span>
                                {'('}
                                {penalties.homeTeam}:
                            </span>
                            <span>
                                {penalties.awayTeam}
                                {')'}{' '}
                            </span>
                        </>
                    )}
                </MatchItem>
            </Inner>
        </Container>
    )
}
