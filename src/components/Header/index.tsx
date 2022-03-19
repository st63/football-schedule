import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { HeaderContainer, InfoBlock, Logo, PageLink } from './styles'
import logo from '../../assets/images/logo.png'

export const Header: FC = () => {
    const { pathname } = useLocation()

    return (
        <HeaderContainer>
            <InfoBlock>
                <Logo src={logo}></Logo>
                <PageLink
                    to="/"
                    bottomLine={
                        pathname === '/' || pathname.includes('league-calendar')
                    }
                >
                    Лиги
                </PageLink>
                <PageLink
                    to="/teams"
                    bottomLine={
                        pathname === '/teams' ||
                        pathname.includes('team-calendar')
                    }
                >
                    Команды
                </PageLink>
            </InfoBlock>
        </HeaderContainer>
    )
}
