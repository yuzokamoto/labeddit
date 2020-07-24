import styled from 'styled-components';

export const VotePostContainer = styled.main`

    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-flow: row;
`
export const ArrowContainer = styled.div`

    display: flex;
    flex-direction: column;
`
export const ArrowStyleUP = styled.div `

    margin-right: 0.5vw;
    background-color: ${props => props.active === 1 ? "green" : "none" };

`
export const ArrowStyleDown = styled.div `

    margin-right: 0.5vw;
    background-color: ${props => props.active === -1 ? "olive" : "none" };;

`