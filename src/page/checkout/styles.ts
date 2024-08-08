import styled from "styled-components";


export const CheckoutContainer = styled.div`
max-width: 1140px;
margin: 0 auto;
margin-top: 140px;
display: flex;
gap: 32px;
.flex {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;

    h3{
        color: ${props => props.theme["base-subtitle"]};
        font-weight: bold;
        font-size: 18px;
    }
}
`;


export const FormContainer = styled.div`
width: 660px;
background-color: ${props => props.theme["base-card"]};
border-radius: 6px;
padding: 40px;
display: flex;
flex-direction: column;
gap: 32px;

.header{
    display: flex;
    gap: 8px;

    div {
        display: flex;
        flex-direction: column;
        gap: 4px;
        h4{
            color: ${props => props.theme["base-title"]};
            font-weight: 500px;
            font-size: 18px;
        }

        p {
            color: ${props => props.theme["base-text"]};
            font-weight: 500;
        }
    }
}

form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .flex {
        display: flex;
        flex-direction: row;
    }
}
`;


interface InputProps {
    width: number
}

export const BaseInput = styled.input<InputProps>`
background: ${props => props.theme["base-input"]};
padding: 12px;
border-radius: 4px;
color: ${props => props.theme["base-label"]};
font-weight: 500;
border: 1px solid ${props => props.theme["base-button"]};
outline: none;
font-size: 18px;
width: ${props => props.width}px;


&:focus{
    border: 2px solid ${props => props.theme["yellow-dark"]}
}
`;

export const ContainerCoffe = styled.div`
background: ${props => props.theme["base-card"]};
padding: 40px;
border-top-left-radius:6px;
border-top-right-radius:44px;
border-bottom-left-radius: 44px;
border-bottom-right-radius: 6px;
width: 100%;

`;


export const CheckoutFooter = styled(FormContainer)`
.flex-opt{
    display: flex;
    align-items: center;
    gap: 12px;


    button {
        display: flex;
        align-items: center; 
        gap: 8px;
        padding: 16px;
        border-radius: 6px;
        background: ${props => props.theme["purple-light"]};
        border: none;
        text-transform: uppercase;
        color: ${props => props.theme["base-text"]};
        font-weight: bold;
        font-size: 12px;
        cursor: pointer;
        min-width: 178px;
        transition: background-color 0.2s;

        &.active{
            background: #D7D5D5;
        }

        &:hover{
            background: #D7D5D5;
        }
    }
}

`;
