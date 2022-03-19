type LeaguesResponse = {
    area: {
        name: string
    }
    id: number
    name: string
}

type TeamsResponse = {
    id: number
    name: string
    crestUrl: string
}

type CalendarResponse = {
    id: number
    utcDate: string
    status: string
    homeTeam: {
        name: string
    }
    awayTeam: {
        name: string
    }
    score: {
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
}
