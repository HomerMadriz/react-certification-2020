import { useAuth } from '../../providers/Auth';
import { renderHook } from '@testing-library/react-hooks'

describe('Auth hook test', () => {
    it('Returns a react context', () => {
        const { result } = renderHook(() => useAuth());
        expect(result).toBeTruthy();
    });
})