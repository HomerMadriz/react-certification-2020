import { renderHook } from '@testing-library/react-hooks';
import useYoutube from "./useYoutube";

describe('Use youtube test', () => {
    it('Returns a list of videos', () => {
        const { result } = renderHook(() => useYoutube("Wizeline"))
        expect(result.current).toBeTruthy();
    })
})