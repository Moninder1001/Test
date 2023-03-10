/**
 * External dependencies
 */
import { css } from '@emotion/react';

export const disabledStyles = css`
	position: relative;
	pointer-events: none;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	// Also make nested blocks unselectable.
	* {
		pointer-events: none;
	}
`;
