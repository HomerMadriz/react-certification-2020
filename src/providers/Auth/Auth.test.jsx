import { renderHook } from '@testing-library/react-hooks';
import { useAuth } from '.';

describe('Auth hook test', () => {
  it('Returns a react context', () => {
    const { result } = renderHook(() => useAuth());
    expect(result).toBeTruthy();
  });
});
