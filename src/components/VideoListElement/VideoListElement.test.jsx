import React from 'react';
import { render, screen } from '@testing-library/react';
import videos from '../../assets/results';
import VideoListElement from './VideoListElement.component';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import VideoContext from '../../State/Videos/VideoContext';

describe('Video list element test', () => {
    it('renders provided properties', () => {
        render(<VideoListElement video={videos[0]} />)

        expect(screen.getByText(videos[0].snippet.title)).toBeTruthy();
        expect(screen.getByTestId('image').getAttribute('src')).toBe(videos[0].snippet.thumbnails.default.url);
    });

    it('execute on click function', () => {
        render(<VideoListElement video={videos[0]} />);

        expect(screen.getByTestId('link').getAttribute('to')).toBe('/' + videos[0].id.videoId);
    });

    it('Execute the onClick dispatch function', () => {
        const dispatch = jest.fn();

        render(
            <BrowserRouter>
                <VideoContext.Provider value={{ dispatch }}>
                    <VideoListElement video={videos[0]} />)
                </VideoContext.Provider>
            </BrowserRouter>
            )
        
        userEvent.click(screen.getByText("Video Tour | Welcome to Wizeline Guadalajara"));

        expect(dispatch).toBeCalled();
    })
});
