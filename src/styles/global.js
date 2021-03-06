import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		outline: none;
	}

	html {
		font-size: 62.5%;
	}

	-ms-hyphenate-limit-chars, body #__next {
		height: 100%;
	}

	body {
		font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
`

export default GlobalStyles
