import styled from 'styled-components'

export const AppContainer = styled.div`
    width: 1280px;
    display: flex;
    margin: 0 auto;
    padding: 20px 30px;
`

export const Cap = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`

export const Notification = styled.span`
    border: 1px solid red;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
`

export const Loader = styled.img`
    width: 120px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`
