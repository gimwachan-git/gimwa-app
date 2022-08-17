import styled from "styled-components";

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
  