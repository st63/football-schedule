import { FC } from 'react'

import { Container, Arrow } from './styles'

type BreadCrumbsProps = {
    page: 'Лиги' | 'Команды'
    name: string
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ page, name }) => {
    return (
        <Container>
            <span>{page}</span>
            <Arrow>{' > '}</Arrow>
            <span>{name}</span>
        </Container>
    )
}
