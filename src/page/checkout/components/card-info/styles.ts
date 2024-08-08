import styled from "styled-components"

export const CardContainer = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
padding: 8px 4px;

&:not(:last-child) {
    padding-bottom: 24px;
    border-bottom: 2px solid ${props => props.theme["base-button"]};
  }


.price {
    color: ${props => props.theme["base-text"]};
    font-weight: bold;
    font-size: 18px;
}
`;


export const CardInfoLeft = styled.div`
display: flex;
align-items: center;
gap: 10px;

img{
    width: 64px;
}

.flex {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.flex-btns{
    display: flex;
    align-items: center;
    gap: 8px;


    .area-btns{
        background: ${props => props.theme["base-button"]};
        padding: 8px;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: center;
        border-radius: 6px;

        span {
            color: ${props => props.theme["base-title"]};
            font-weight: bold;
            font-size: 16px;
            line-height: 0;
        }

        button {
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            color: ${props => props.theme.purple};
            font-size: 24px;
            line-height: 0;
        }
    }

    .remove{
        background: ${props => props.theme["base-button"]};
        padding: 8px;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: center;
        border-radius: 6px;
        border:none;
        cursor: pointer;
        color: ${props => props.theme["base-text"]};
        transition: background-color 0.2s;
        &:hover{
            background: #D7D5D5;
        }
        &:active {
            background: ${props => props.theme["purple-light"]};
        }
    }
}
`;