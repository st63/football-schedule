import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    width: 13%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: aliceblue;
    border-radius: 15px;
    align-items: center;
    margin: 20px;
    justify-content: space-between;
    height: 110px;
    text-decoration: none;
    color: #000;
`

export const Name = styled.div``

export const Logo = styled.img`
    width: 70px;
    height: 70px;
`
