type Leagues = {
    leagueName: string
    country: string
    id: number
}

type Teams = {
    id: number
    teamName: string
    teamLogo: string
}

type Calendar = {
    id: number
    date: string
    status:
        | 'SCHEDULED'
        | 'LIVE'
        | 'IN_PLAY'
        | 'PAUSED'
        | 'FINISHED'
        | 'POSTPONED'
        | 'SUSPENDED'
        | 'CANCELED'
    homeTeam: string
    awayTeam: string
    fullTime: {
        homeTeam: number
        awayTeam: number
    }
    extraTime: {
        homeTeam: number
        awayTeam: number
    }
    penalties: {
        homeTeam: number
        awayTeam: number
    }
}
