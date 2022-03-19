import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
    width: 100%;
    border-bottom: 2px solid #e0efff;
    margin-bottom: 20px;
`

export const InfoBlock = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.img`
    width: 90px;
`

export const PageLink = styled(Link)<{ bottomLine: boolean }>`
    text-decoration: none;
    color: #000;
    position: relative;

    ${({ bottomLine }) =>
        bottomLine &&
        `
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #0075eb;
            left: 0px;
            bottom: -8px;
        }
    `}
`
