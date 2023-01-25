// // screen sizes
// const sizes = {
//   mobileS: '320px',
//   mobileM: '375px',
//   mobileL: '425px',
//   tablet: '768px',
//   laptop: '1024px',
//   laptopL: '1440px',
//   desktop: '2560px'
// }

// screen sizes
const sizes = {
	tablet: "870px",
	laptop: "1024px",
	desktop: "1440px",
};

// media queries for screen sizes
const devices = {
	tablet: `(min-width: ${sizes.tablet})`,
	laptop: `(min-width: ${sizes.laptop})`,
	desktop: `(min-width: ${sizes.desktop})`,
};

module.exports = devices;
