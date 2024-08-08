import styled from "styled-components";

export const SuccessContainer = styled.div`
max-width: 1140px;
margin: 0 auto;
margin-top: 140px;
display: flex;
align-items: self-start;
justify-content: space-between;

img {
    width: 492px;
}
`;

export const ContainerInfo = styled.div`
display: flex;
flex-direction: column;
gap: 40px;

.top {
    display: flex;
    flex-direction: column;
    gap: 4px;
    h3{
    color: ${props => props.theme["yellow-dark"]};
    font-weight: bold;
    font-size: 24px;
}

p {
color: ${props => props.theme["base-title"]};
font-size: 18px;
}
}

`;

export const BoxInfo = styled.div`
padding: 40px;
border-top-left-radius:6px;
border-top-right-radius:44px;
border-bottom-left-radius: 44px;
border-bottom-right-radius: 6px;
border: 1px solid red;
display: flex;
flex-direction: column;
gap: 32px;
width: 526px;


div{
    display: flex;
    align-items: center;
    gap: 12px;

    p {
        color: ${props => props.theme["base-text"]}
    }
}

.rounded-purple{
background: ${props => props.theme.purple};
padding: 8px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
width: 32px;
height: 32px;
}

.rounded-yellow{
background: ${props => props.theme["yellow"]};
padding: 8px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
width: 32px;
height: 32px;
}

.rounded-yellow-dark{
background: ${props => props.theme["yellow-dark"]};
padding: 8px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
width: 32px;
height: 32px;
}

.flex{
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: baseline;
}

`;