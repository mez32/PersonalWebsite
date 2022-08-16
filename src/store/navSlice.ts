import { createSlice } from '@reduxjs/toolkit'
import { Pages } from '../types'
import { basicSyncActions, basicThunkHandlers } from './actions'

export interface BasicState {
	page: Pages
}

const initialState = {
	page: Pages.aboutMe,
}

export const navSlice = createSlice({
	name: 'navSlice',
	initialState,
	reducers: basicSyncActions,
	extraReducers(builder) {
		basicThunkHandlers.forEach((handler) => {
			handler(builder)
		})
	},
})

export const NavActions = navSlice.actions
export default navSlice.reducer
