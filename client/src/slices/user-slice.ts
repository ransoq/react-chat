import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ApplicationState } from '../store';

export interface UserState {
  name: string | undefined;
  connected: boolean;
  loggedIn: boolean;
}

const initialState: UserState = {
    name: undefined,
    connected: false,
    loggedIn: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state, { payload }: PayloadAction<string | undefined>) => {
            console.log('payload :>> ', payload);
            state.name = payload;
        },
        setIsConnected: (state, { payload }: PayloadAction<boolean>) => {
            state.connected = payload;
        },
        setIsLoggedIn: (state, { payload }: PayloadAction<boolean>) => {
            state.loggedIn = payload;
        },
    },
})

export const { setName, setIsConnected, setIsLoggedIn } = userSlice.actions;
export const userSelector = (state: ApplicationState) => state.user;

export default userSlice.reducer;