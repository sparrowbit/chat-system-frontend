import { createSlice } from '@reduxjs/toolkit'

export interface ChannelState {
    ID: string,
    name: string,
}

const initialState: ChannelState[] = []

const channelSlice = createSlice({
    name: "ChannelSlice",
    initialState,
    reducers: {
        addChannelContext: (state, action) => { 
            state.push(action.payload)
        },
        getChannelContext: (state, action) => {
            return state
        },
        setChannels: (state, action) => {
            return action.payload
        }
    }
})

export default channelSlice.reducer

export const { addChannelContext, getChannelContext, setChannels } = channelSlice.actions