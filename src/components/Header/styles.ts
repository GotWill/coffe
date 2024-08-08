import styled from "styled-components";

export const HeaderContainer = styled.header`
position: fixed;
width: 100%;
top: 0;
background: white;
    border-bottom: 2px solid #f3f2f2;

div.header{
    max-width: 1140px;
margin: 0 auto;
display: flex;
justify-content: space-between;
padding: 32px 0;

}


img{
    width: 85px;
}
`;

export const ContainerLeft = styled.div`
display: flex;
align-items: center;
gap: 12px;
`;

export const ContainerState = styled.div`
background: ${props => props.theme["purple-light"]};
padding: 8px;
border-radius: 6px;
display: flex;
align-items: center;
gap: 4px;


span {
    color: ${props => props.theme.purple};
    font-size: 14px;
}
`;

export const ContainerCart = styled.div`
background: ${props => props.theme["yellow-light"]};
padding: 8px;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
position: relative;

.count {
    background: ${props => props.theme["yellow-dark"]};
    position: absolute;
    top: -17px;
    right: -12px;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    border-radius: 50%;
}
`;