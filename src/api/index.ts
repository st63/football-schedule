import axios from 'axios'

import { dateFormat } from '../utils'

const config = {
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '4d81fbdabeda4e3bb811057d6d3b3321',
    },
}

export const getLeagues = async (): Promise<Leagues[]> => {
    const { data } = await axios.get(
        'https://api.football-data.org/v2/competitions/',
        config
    )

    return data.competitions.map(({ area, id, name }: LeaguesResponse) => ({
        leagueName: name,
        country: area.name,
        id,
    }))
}

export const getTeams = async (): Promise<Teams[]> => {
    const { data } = await axios.get(
        'https://api.football-data.org/v2/teams',
        config
    )

    return data.teams.map(({ id, name, crestUrl }: TeamsResponse) => ({
        id,
        teamName: name,
        teamLogo: crestUrl,
    }))
}

export const getLeagueCalendar = async (
    start: string,
    end: string,
    id: string
): Promise<Calendar[]> => {
    const { data } = await axios.get(
        `https://api.football-data.org/v2/competitions/${id}/matches?dateFrom=${dateFormat(
            start
        )}&dateTo=${dateFormat(end)}`,
        config
    )

    return data.matches.map(
        ({
            utcDate,
            status,
            homeTeam,
            awayTeam,
            score,
            id,
        }: CalendarResponse) => ({
            id,
            date: utcDate,
            status,
            homeTeam: homeTeam.name,
            awayTeam: awayTeam.name,
            fullTime: {
                homeTeam: score.fullTime.homeTeam,
                awayTeam: score.fullTime.awayTeam,
            },
            extraTime: {
                homeTeam: score.extraTime.homeTeam,
                awayTeam: score.extraTime.awayTeam,
            },
            penalties: {
                homeTeam: score.penalties.homeTeam,
                awayTeam: score.penalties.awayTeam,
            },
        })
    )
}

export const getTeamCalendar = async (
    start: string,
    end: string,
    id: string
): Promise<Calendar[]> => {
    const { data } = await axios.get(
        `https://api.football-data.org/v2/competitions/${id}/matches?dateFrom=${dateFormat(
            start
        )}&dateTo=${dateFormat(end)}`,
        config
    )

    return data.matches.map(
        ({
            utcDate,
            status,
            homeTeam,
            awayTeam,
            score,
            id,
        }: CalendarResponse) => ({
            id,
            date: utcDate,
            status,
            homeTeam: homeTeam.name,
            awayTeam: awayTeam.name,
            fullTime: {
                homeTeam: score.fullTime.homeTeam,
                awayTeam: score.fullTime.awayTeam,
            },
            extraTime: {
                homeTeam: score.extraTime.homeTeam,
                awayTeam: score.extraTime.awayTeam,
            },
            penalties: {
                homeTeam: score.penalties.homeTeam,
                awayTeam: score.penalties.awayTeam,
            },
        })
    )
}

export const getTestLeagueCalendar = async (): Promise<Calendar[]> => {
    const { data } = await axios.get(
        'https://api.football-data.org/v2/competitions/2016/matches?dateFrom=2022-01-01&dateTo=2022-12-31',
        config
    )

    return data.matches.map(
        ({
            utcDate,
            status,
            homeTeam,
            awayTeam,
            score,
            id,
        }: CalendarResponse) => ({
            id,
            date: utcDate,
            status,
            homeTeam: homeTeam.name,
            awayTeam: awayTeam.name,
            fullTime: {
                homeTeam: score.fullTime.homeTeam,
                awayTeam: score.fullTime.awayTeam,
            },
            extraTime: {
                homeTeam: score.extraTime.homeTeam,
                awayTeam: score.extraTime.awayTeam,
            },
            penalties: {
                homeTeam: score.penalties.homeTeam,
                awayTeam: score.penalties.awayTeam,
            },
        })
    )
}

export const getTestTeamCalendar = async (): Promise<Calendar[]> => {
    const { data } = await axios.get(
        'https://api.football-data.org/v2/teams/57/matches?dateFrom=2022-01-01&dateTo=2022-12-31',
        config
    )

    return data.matches.map(
        ({
            utcDate,
            status,
            homeTeam,
            awayTeam,
            score,
            id,
        }: CalendarResponse) => ({
            id,
            date: utcDate,
            status,
            homeTeam: homeTeam.name,
            awayTeam: awayTeam.name,
            fullTime: {
                homeTeam: score.fullTime.homeTeam,
                awayTeam: score.fullTime.awayTeam,
            },
            extraTime: {
                homeTeam: score.extraTime.homeTeam,
                awayTeam: score.extraTime.awayTeam,
            },
            penalties: {
                homeTeam: score.penalties.homeTeam,
                awayTeam: score.penalties.awayTeam,
            },
        })
    )
}
