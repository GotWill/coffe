import styled from "styled-components";

export const CartContainer = styled.div`
background: ${props => props.theme["base-card"]};
width: 256px;
height: 310px;
border-top-left-radius: 6px;
border-top-right-radius: 36px;
border-bottom-left-radius: 36px;
border-bottom-right-radius: 6px;

.container-img{
    display: flex;
    justify-content: center;
    margin-top: -40px;
    img{
        width: 120px;
    }
}


.tags{
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;

    span {
        background: ${props => props.theme["yellow-light"]};
        padding: 4px 8px;
        color: ${props => props.theme["yellow-dark"]};
        font-weight: bold;
        font-size: 16px;
        border-radius: 100px;
    }
}

.info {
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 10px;
    margin-top: 20px;
    h3{
        color: ${props => props.theme["base-subtitle"]};
        font-weight: bold;
        font-size: 20px;
    }

    p {
        color: ${props => props.theme["base-label"]};
        font-size: 14px;
        font-weight: 500;
        max-width: 216px;
    margin: 0 auto;
    }
}
`;

export const CartContainerFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 30px;
padding: 0 20px;


.price{
    color: ${props => props.theme["base-text"]};
    font-weight: bold;
    font-size: 18px;
}

.flex {
    display: flex;
    align-items: center;
    gap: 8px;

    .area-btns{
        background: ${props => props.theme["base-button"]};
        padding: 8px;
        width: 72px;
        display: flex;
        justify-content: space-between;
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
        }
    }

    .cart{
            background: ${props => props.theme.purple};
            display: flex;
            justify-content: center;
            align-items: center;
            width: 38px;
            height: 38px;
            border-radius: 6px;
            border: none;
            cursor: pointer;
        }
}
`;