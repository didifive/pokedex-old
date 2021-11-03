import styled from "styled-components";

export const NavBarStyles = styled.header.attrs(props => ({
  bgColor: props.bgColor || '#000'
}))`
  align-items: center;
  background-color: ${props => props.bgColor} !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackContainer = styled.nav.attrs(props => ({
  textColor: props.textColor || '#FFF',
  hoverColor: props.hoverColor || '#DDD',
}))`
  display: flex;
  flex-direction: row;

  a {
    text-decoration: none;
  }

  h2 {
    color: ${props => props.textColor};
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 55px;
    margin: 0 1vw;

    &:hover {
      color: ${props => props.hoverColor};
    }
  }

  h2 span {
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div.attrs(props => ({
  textColor: props.textColor || '#FFF',
}))`
  width: 65%;
  text-align: center;
  margin: 0;

  h1 {
    color: ${props => props.textColor};
  }
`;
