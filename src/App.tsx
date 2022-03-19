import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Leagues } from './pages/Leagues'
import { Teams } from './pages/Teams'
import { LeagueCalendar } from './pages/LeagueCalendar'
import { TeamCalendar } from './pages/TeamCalendar'
import { AppContainer } from './styles'

const App: FC = () => {
    return (
        <AppContainer>
            <Router>
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
            </Router>
        </AppContainer>
    )
}

export default App
