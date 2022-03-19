import { FC } from 'react'
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom'

import { Leagues } from './pages/Leagues'
import { Teams } from './pages/Teams'
import { LeagueCalendar } from './pages/LeagueCalendar'
import { TeamCalendar } from './pages/TeamCalendar'
import { AppContainer } from './styles'

const App: FC = () => {
    return (
        <AppContainer>
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Leagues />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route
                        path="/league-calendar/:id"
                        element={<LeagueCalendar />}
                    />
                    <Route
                        path="/team-calendar/:id"
                        element={<TeamCalendar />}
                    />
                </Routes>
            </HashRouter>
        </AppContainer>
    )
}

export default App
