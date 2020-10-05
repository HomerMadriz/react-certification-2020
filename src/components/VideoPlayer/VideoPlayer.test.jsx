import React from 'react';
import { render, screen } from '@testing-library/react';
import videos from '../../assets/results';
import VideoContext from '../../State/Videos/VideoContext';
import VideoPlayer from './VideoPlayer.component';
import { useAuth } from '../../providers/Auth';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

jest.mock('../../providers/Auth', () => ({
    useAuth : jest.fn()
}))

describe('Video Player test', () => {
    
    beforeEach(() => {
        jest.clearAllMocks();
        
        useAuth.mockReturnValue({ authenticated : true });
    });

    it('creates the correct iframe', () => {
        const state = { 
            currentVideo :  videos[0],
            videos : videos[0]
        }

        render(
            <VideoContext.Provider value={{ state }}>
                <VideoPlayer />
            </VideoContext.Provider> 
        )

        expect(screen.getByTestId('iframe').getAttribute('src')).toBe(`https://www.youtube.com/embed/${videos[0].id.videoId}`)
    });

    it('Execute dispatch for remove favorite video', () => {
        let video = videos[0];
        video.isFavorite = true;
        const state = { 
            currentVideo :  video,
            videos : video
        }
        const dispatch = jest.fn();

        render(
            <BrowserRouter>
                <VideoContext.Provider value={{ state, dispatch }}>
                    <VideoPlayer />
                </VideoContext.Provider> 
            </BrowserRouter>
        )
        
        userEvent.click(screen.getByText('Remover de favoritos'))

        expect(dispatch).toBeCalledWith({ type: 'REMOVE_FAVORITE_VIDEO' });
    })

    it('Execute dispatch for remove favorite video', () => {
        let video = videos[0];
        video.isFavorite = false;
        const state = { 
            currentVideo :  video,
            videos : video
        }
        const dispatch = jest.fn();

        render(
            <BrowserRouter>
                <VideoContext.Provider value={{ state, dispatch }}>
                    <VideoPlayer />
                </VideoContext.Provider> 
            </BrowserRouter>
        )
        
        userEvent.click(screen.getByText('Agregar a favoritos'))

        expect(dispatch).toBeCalledWith({ type: 'ADD_FAVORITE_VIDEO', payload: video });
    })
})