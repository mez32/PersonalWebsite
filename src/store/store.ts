import { AnyAction, AsyncThunkAction, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import navSlice from './navSlice'

export const store = configureStore({
	reducer: {
		navSlice,
	},
})

// Sets up AppDispatch and RootState
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// Usable hooks for AppDispatch and AppSelector with types
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const GlobalDispatch = (action: AsyncThunkAction<any, any, any> | AnyAction) => {
	store.dispatch(action)
}
