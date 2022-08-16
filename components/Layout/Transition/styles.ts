export const variants = {
  fadeIn: {
    opacity: 1,
    x: 0,
    transition: {
      duration: .25,
      ease: "linear",
      delay: .15,

    }
  },
  inactive: {
    x: 50,
    opacity: 0,
    transition: {
      duration: .25,
      ease: "easeIn",

    }
  },
  fadeOut: {
    opacity: 0,
    x: -50,
    transition: {
      duration: .2,
      ease: "easeOut"
    }
  }
} as any;
