import styled from "styled-components";

export const FooterContainer = styled.div`
margin-top: 24px;
display: flex;
flex-direction: column;
gap: 12px;

div{
    display: flex;
    justify-content: space-between;

    span {
        color: ${props => props.theme["base-text"]};
        font-size: 16px;
    }

    h3{
        color: ${props => props.theme["base-subtitle"]};
        font-weight: bold;
        font-size: 20px;

        + span {
            color: ${props => props.theme["base-subtitle"]};
        font-weight: bold;
        font-size: 20px;
        }
    }
}
button {
    background: ${props => props.theme.yellow};
    padding: 12px 8px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;

    &:disabled{
        opacity: 0.8;
        cursor: not-allowed;
    }


    &:not(:disabled):hover{
       background:${props => props.theme["yellow-dark"]} ;
    }
}
`