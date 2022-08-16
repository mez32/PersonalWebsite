import { BasicState } from './navSlice'
import { ActionReducerMapBuilder, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Pages } from '../types'

export const basicSyncActions = {
	navAction(state: BasicState, action: PayloadAction<Pages>) {
		state.page = action.payload
	},
}

// Demo purpose only
export const basicThunkHandlers: ((builder: ActionReducerMapBuilder<BasicState>) => void)[] = []

export const basicThunk = createAsyncThunk('basicSlice/basicThunk', async (payload: string) => {
	return payload
})

const handleBasicThunk = (builder: ActionReducerMapBuilder<BasicState>) => {
	builder
		.addCase(basicThunk.fulfilled, (state: BasicState, action: PayloadAction<any>) => {
			console.log('Basic Thunk Fulfilled')
			state.page = action.payload
		})
		.addCase(basicThunk.pending, (state: BasicState) => {
			console.log('Basic Thunk Pending')
		})
		.addCase(basicThunk.rejected, (state: BasicState) => {
			console.log('Basic Thunk Rejected')
		})
}
basicThunkHandlers.push(handleBasicThunk)
