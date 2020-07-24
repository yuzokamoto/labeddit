import styled from 'styled-components';

export const FeedContainer = styled.main `

    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    background-color: #BDBAB5;
`

export const FeedLeft = styled.div `

    width: 15vw;
    min-height: 100vh;
`

export const CardContainer = styled.div `

    width: 50vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #CFCCC7;
    padding: 1vh;
    overflow-wrap: break-word;

    p{
        width: 45vw;
    }
`
export const FeedRight = styled.div `

    width: 35vw;
    min-height: 100vh;
`
export const VoteCardContainer = styled.div `

    max-width: 3vw;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    height: 6vh;
    padding-top: 0.5vh;
`
export const EachCardContainer = styled.section `

    max-width: 47vw;
    display: flex;
    flex-direction: column;
    justify-content: end;
`
export const VoteAndCardContainer = styled.section`

    display: flex;
    flex-flow: row;
    justify-content: space-between;
`