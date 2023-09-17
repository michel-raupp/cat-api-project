import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/



*{
	font-family: 'Poppins', sans-serif !important;
	box-sizing: border-box;
	
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: inherit;
}

body{
	background-color: #171616;
}

h1, h2, h3, h4, p, div{
	color: #fff;
    line-height: 1.2;
}

.slick-dots li button:before{
	opacity: 1;
	color: #4b4848;
	font-size: 10px;
}
.slick-dots li.slick-active button:before{
	color: #fff;
	font-family: 'slick';
    font-size: 10px;
	opacity: 1;
}
.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    border-radius: 50%;
    background: #fff;
    color: #222;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 19px;
    width: 20px;
    display: flex;
}
`;

export default GlobalStyle;