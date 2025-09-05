import {render, screen} from '@testing-library/react';
import App from './App';
import {describe, expect, it} from 'vitest';
import {MemoryRouter} from 'react-router-dom';

describe('App', () => {
	it('renders the App component', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<App />
			</MemoryRouter>,
		);

		expect(screen.getByText('Home page')).toBeInTheDocument();
	});
});
