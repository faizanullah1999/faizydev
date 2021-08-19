module.exports = {
  email: 'faizanullah1999@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/faizanullah1999',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/designbyfaizi',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/designbyfaizi',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/designbyfaizi',
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    // {
    //   name: 'Experience',
    //   url: '/#jobs',
    // },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    red: '#de445f',
    // green: '#64ffda',
    // navy: '#0a192f',
    dark: '#000000',
    // darkNavy: '#000000',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
