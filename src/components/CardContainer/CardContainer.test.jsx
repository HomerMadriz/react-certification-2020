import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoContext from '../../State/Videos/VideoContext';
import CardContainer from './CardContainer.component';
import videos from '../../assets/results';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('Card container test', () => {

    it('displays a loading indicator if there is no videos', () => {
        
        const state = {videos: {}}

        render(
        <VideoContext.Provider value={{ state }}>
            <CardContainer></CardContainer>
        </VideoContext.Provider>
        )

        expect(screen.getByText('Loading...')).toBeTruthy();
    });

    it('Execute dispatch onClick', () => {
        const state = { videos: [videos[0]] };
        const dispatch = jest.fn();

        render(
            <BrowserRouter>
                <VideoContext.Provider value={{ state, dispatch }}>
                    <CardContainer></CardContainer>
                </VideoContext.Provider>
            </BrowserRouter>
            )
        
        userEvent.click(screen.getByText("Video Tour | Welcome to Wizeline Guadalajara"));

        expect(dispatch).toBeCalledTimes(2);
    })
});