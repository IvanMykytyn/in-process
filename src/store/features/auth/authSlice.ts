import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'store'

// toastify
import { toast } from 'react-toastify'

// thunk
import { loginUser, signUpUser } from './authThunk'
import { User } from 'models'

interface AuthState {
  user: User | null
  isLoading: boolean
  error: string
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // PayloadAction<number>
    logout: (state) => {
      state.user = null
      toast.success('User log out')
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.user = payload
      toast.success(`Welcome Back ${state.user?.firstName}`)
    })

    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false

      state.error = payload?.error ?? 'Something went Wrong'
      toast.error(state?.error)
    })

    // Sign Up
    builder.addCase(signUpUser.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.user = payload
      toast.success(`Hello There ${state.user?.firstName}`)
    })

    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      state.isLoading = false

      state.error = payload?.error ?? 'Something went Wrong'
      toast.error(state?.error)
    })
  },
})

export const { logout } = authSlice.actions
export const selectUser = (state: RootState) => state.auth

export default authSlice.reducer
