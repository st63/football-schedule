import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    width: 20%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: #e0efff;
    border-radius: 15px;
    align-items: center;
    margin: 20px;
    justify-content: space-between;
    height: 90px;
    text-decoration: none;
    color: #000;
`

export const Name = styled.div`
    font-size: 22px;
    font-weight: 600;
`

export const Country = styled.div``
