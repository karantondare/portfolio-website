// import { createGlobalStyle } from "styled-components";

// const GlobalStyles = createGlobalStyle`
//   @font-face {
//   font-family: Apercu;
//   src: url("./fonts/apercu/Apercu-Light.eot");
//   src: url("./fonts/apercu/Apercu-Light.eot?#iefix") format("embedded-opentype"),
//     url("./fonts/apercu/Apercu-Light.woff2") format("woff2"),
//     url("./fonts/apercu/Apercu-Light.woff") format("woff"),
//     url("./fonts/apercu/Apercu-Light.ttf") format("truetype"),
//     url("./fonts/apercu/Apercu-Light.svg#Apercu-Light") format("svg");
//   font-weight: 300;
//   font-style: normal;
// }
// @font-face {
//   font-family: Apercu;
//   src: url("./fonts/apercu/Apercu-LightItalic.eot");
//   src: url("./fonts/apercu/Apercu-LightItalic.eot?#iefix")
//       format("embedded-opentype"),
//     url("./fonts/apercu/Apercu-LightItalic.woff2") format("woff2"),
//     url("./fonts/apercu/Apercu-LightItalic.woff") format("woff"),
//     url("./fonts/apercu/Apercu-LightItalic.ttf") format("truetype"),
//     url("./fonts/apercu/Apercu-LightItalic.svg#Apercu-LightItalic")
//       format("svg");
//   font-weight: 300;
//   font-style: italic;
// }
// @font-face {
//   font-family: Apercu;
//   src: url("./fonts/apercu/Apercu-Regular.eot");
//   src: url("./fonts/apercu/Apercu-Regular.eot?#iefix")
//       format("embedded-opentype"),
//     url("./fonts/apercu/Apercu-Regular.woff2") format("woff2"),
//     url("./fonts/apercu/Apercu-Regular.woff") format("woff"),
//     url("./fonts/apercu/Apercu-Regular.ttf") format("truetype"),
//     url("./fonts/apercu/Apercu-Regular.svg#Apercu-Regular") format("svg");
//   font-weight: 400;
//   font-style: normal;
// }
// @font-face {
//   font-family: Apercu;
//   src: url("./fonts/apercu/Apercu-Italic.eot");
//   src: url("./fonts/apercu/Apercu-Italic.eot?#iefix")
//       format("embedded-opentype"),
//     url("./fonts/apercu/Apercu-Italic.woff2") format("woff2"),
//     url("./fonts/apercu/Apercu-Italic.woff") format("woff"),
//     url("./fonts/apercu/Apercu-Italic.ttf") format("truetype"),
//     url("./fonts/apercu/Apercu-Italic.svg#Apercu-Italic") format("svg");
//   font-weight: 400;
//   font-style: italic;
// }
// @font-face {
//   font-family: Apercu;
//   src: url("./fonts/apercu/Apercu-Medium.eot");
//   src: url("./fonts/apercu/Apercu-Medium.eot?#iefix")
//       format("embedded-opentype"),
//     url("./fonts/apercu/Apercu-Medium.woff2") format("woff2"),
//     url("./fonts/apercu/Apercu-Medium.woff") format("woff"),
//     url("./fonts/apercu/Apercu-Medium.ttf") format("truetype"),
//     url("./fonts/apercu/Apercu-Medium.svg#Apercu-Medium") format("svg");
//   font-weight: 500;
//   font-style: normal;
// }
// @font-face {
//   font-family: Apercu;
//   src: url("./fonts/apercu/Apercu-MediumItalic.eot");
//   src: url("./fonts/apercu/Apercu-MediumItalic.eot?#iefix")
//       format("embedded-opentype"),
//     url("./fonts/apercu/Apercu-MediumItalic.woff2") format("woff2"),
//     url("./fonts/apercu/Apercu-MediumItalic.woff") format("woff"),
//     url("./fonts/apercu/Apercu-MediumItalic.ttf") format("truetype"),
//     url("./fonts/apercu/Apercu-MediumItalic.svg#Apercu-MediumItalic")
//       format("svg");
//   font-weight: 500;
//   font-style: italic;
// }
// @font-face {
//   font-family: Apercu;
//   src: url("./fonts/apercu/Apercu-Bold.eot");
//   src: url("./fonts/apercu/Apercu-Bold.eot?#iefix") format("embedded-opentype"),
//     url("./fonts/apercu/Apercu-Bold.woff2") format("woff2"),
//     url("./fonts/apercu/Apercu-Bold.woff") format("woff"),
//     url("./fonts/apercu/Apercu-Bold.ttf") format("truetype"),
//     url("./fonts/apercu/Apercu-Bold.svg#Apercu-Bold") format("svg");
//   font-weight: 700;
//   font-style: normal;
// }
// @font-face {
//   font-family: Apercu;
//   src: url("./fonts/apercu/Apercu-BoldItalic.eot");
//   src: url("./fonts/apercu/Apercu-BoldItalic.eot?#iefix")
//       format("embedded-opentype"),
//     url("./fonts/apercu/Apercu-BoldItalic.woff2") format("woff2"),
//     url("./fonts/apercu/Apercu-BoldItalic.woff") format("woff"),
//     url("./fonts/apercu/Apercu-BoldItalic.ttf") format("truetype"),
//     url("./fonts/apercu/Apercu-BoldItalic.svg#Apercu-BoldItalic") format("svg");
//   font-weight: 700;
//   font-style: italic;
// }
// * {
//   box-sizing: border-box;
// }
// body,
// html {
//   margin: 0;
//   padding: 0;
//   background-color: #fff;
//   color: #444;
//   font-family: Apercu, "Source Sans Pro", Roboto, Helvetica, Arial, sans-serif;
//   line-height: 1.5;
//   width: 100%;
// }
// a {
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   font-weight: 700;
//   color: inherit;
// }
// ul {
//   list-style: none;
//   padding: 0;
//   margin: 0;
// }
// svg {
//   width: 100%;
//   height: 100%;
//   fill: currentColor;
//   color: #555;
// }
// svg:hover {
//   color: #333;
// }
// img {
//   max-width: 100%;
//   vertical-align: middle;
// }
// strong {
//   font-weight: 700;
//   color: #333;
// }

//  /* all sections */
// .section {
//   display: flex;
//   justify-content: center;
//   padding: 100px 170px;
// }

// .section-title {
//   flex-shrink: 0;
//   width: 200px;
//   margin-right: 70px;
//   color: #0967d2;
//   text-transform: uppercase;
//   text-align: right;
//   font-weight: 700;
//   letter-spacing: 2px;
// }
// .section-content {
//   font-weight: 300;
//   font-size: 1rem;
//   width: 100%;
//   max-width: 650px;
// }

// .section-content p {
//   margin-top: 0;
//   margin-bottom: 25px;
// }

// @media screen and (max-width: 1280px) {
//   .section {
//     padding: 100px;
//   }
// }
// @media screen and (max-width: 1024px) {
//   .section {
//     padding: 50px;
//   }
//   .section-title {
//     margin-right: 50px;
//   }
// }
// @media screen and (max-width: 850px) {
//   .section-title {
//     width: 150px;
//   }
// }
// @media screen and (max-width: 768px) {
//   .section {
//     display: block;
//   }
//   .section-title {
//     text-align: left;
//     width: auto;
//   }
//   .section-content {
//     padding-top: 30px;
//     padding-left: 50px;
//   }
// }
// @media screen and (max-width: 480px) {
//   .section {
//     padding: 50px 35px;
//   }
//   .section-content {
//     padding-left: 30px;
//   }
// }

// `;

// export default GlobalStyles;
