import styled from 'styled-components'

interface ContainerProps {
    active?: boolean
}


export const Container = styled.div<ContainerProps>`
    display: flex;
    padding: 20px;
    align-items: center;
    background: #fafafa;
    opacity: ${props => props.active ? 1 : 0.3};

    button {
        margin-left: auto;
    }
`

export const Picture = styled.div`
    img {
        height: 80px;
        margin-right: 10px;
        border-radius: 50%;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column
`