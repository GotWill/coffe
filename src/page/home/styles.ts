import styled from "styled-components";

export const HomeContainer = styled.div`
max-width: 1140px;
margin: 0 auto;
margin-top: 140px;
`;


export const Hero = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 50px;

img{
    width: 476px;
}
`;

export const InfoLeftHero = styled.div`

.top {

    display: flex;
    flex-direction: column;
    gap: 16px;

    h1 {
    color: ${props => props.theme["base-title"]};
    font-size: 24px;
    font-weight: bold;
    max-width: 588px;
}

p {
    color: ${props => props.theme["base-subtitle"]};
    font-size: 16px;
}

}


`;

export const DetailsIconLeftHero = styled.div`
margin-top: 66px;
display: grid;
grid-template-columns: repeat(2, 1fr);
row-gap: 20px;

.flex{
    display: flex;
    align-items: center;
    gap: 12px;

    span {
        color: ${props => props.theme["base-text"]};
        font-size: 18px;
    }
}

 .rounded{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        &.hum{
            background: ${props => props.theme["yellow-dark"]};
        }
        &.two{
            background: ${props => props.theme["base-text"]};
        }
        &.three{
            background: ${props => props.theme["yellow"]};
        }
        &.four{
            background: ${props => props.theme["purple"]};
        }
    }
`;


export const ContainerCoffe = styled.div`
margin-top: 40px;
display: flex;
flex-direction: column;
gap: 54px;

h2{
    color: ${props => props.theme["base-subtitle"]};
    font-weight: bold;
    font-size: 20px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    row-gap: 40px;
    margin-bottom: 80px;
}

`;