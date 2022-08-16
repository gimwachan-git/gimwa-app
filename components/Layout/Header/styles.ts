import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    width: 200px;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 150px 50px;
`;
export const StyledNav = styled.nav`
    display: flex;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-direction: column;
    width: 100%;
    gap: 30px;
    a {
        text-align: left;
    }
`;
