import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card.component';
import videos from '../../assets/results';

describe('Card tests', () => {
    it('renders provided properties', () => {
        const { container } = render(<Card video={videos[0]} />);
        expect(screen.getByText(videos[0].snippet.title)).toBeTruthy();
        expect(screen.getByTestId('image').getAttribute('src')).toBe(videos[0].snippet.thumbnails.medium.url)
        expect(container).toHaveTextContent(videos[0].snippet.description);
    });
})
