import reducer, { StateType } from './reducer';

test('collapsed should be true', () => {
    const state: StateType = { collapsed: false };
    const copyState = reducer(state, { type: 'TOGGLE' });
    expect(copyState.collapsed).toBeTruthy();
});

test('collapsed should be false', () => {
    const state: StateType = { collapsed: true };
    const copyState = reducer(state, { type: 'TOGGLE' });
    expect(copyState.collapsed).toBeFalsy();
});

test('should error', () => {
    const state: StateType = { collapsed: true };
    expect(() => {
        reducer(state, { type: 'FAKE' });
    }).toThrowError('Error action type');
});
