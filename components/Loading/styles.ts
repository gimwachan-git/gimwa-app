import styled from "styled-components";

export const Loadingmask = styled.section`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: #FFF;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Loadinglogo = styled.svg`
    width: 30vw;
    height: auto;
    max-width: 200px;
    min-width: 100px;
`;
export const Loadingcontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
`;
export const Loadingtext = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
`;
export const variants = {
    fadeIn: {
      y: "-100%",
      delay: 5,  
      transition: {
        duration: .55,
        ease: "easeIn",
        delay: 1.5,  
      }
    },
    // inactive: {
    //   y: "0",
    //   transition: {
    //     duration: 5,
    //     ease: "easeIn",
    //   }
    // },
    // fadeOut: {
    //   y: "0",
    //   transition: {
    //     duration: 2,
    //     ease: "easeOut",
    //   }
    // }
  } as any;
  