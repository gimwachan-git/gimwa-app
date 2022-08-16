import styled from "styled-components";


interface LogoProgress {
    strokeDashoffset : string
}

export const LogoCircle = styled.circle`
    stroke: #00000040;
    stroke-width: 10px;
`
export const LogoCircleProgress = styled.circle`
    stroke: #333;
    stroke-width: 10px;
    stroke-dasharray: 628.319;
    stroke-dashoffset: 0;
    transition: .3s;
`
export const LogoProgress = styled.svg`
    transform: rotate(-90deg);
    display: block;    
`
export const LogoContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: relative;
    svg {
        position: absolute;
        top: 0;
        left: 0;
    }
`
export const Logomask = styled.section`
    position: fixed;
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
    background: #FFF;
    z-index: 90;
`;