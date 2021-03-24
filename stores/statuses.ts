import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status } from '../types'


export interface StatusesState {
  statues: Status[]
  isShowModal: boolean
}

const initialState: StatusesState = {
  statues: [
    {
      id: 1,
      title: 'To do',
      order: 0,
    },
    {
      id: 2,
      title: 'In progress',
      order: 1,
    },
    {
      id: 3,
      title: 'Done',
      order: 2,
    },
  ],
  isShowModal: false,
}

export const statuesSlice = createSlice({
  name: 'statues',
  initialState,
  reducers: {
    setIsShowModal: (state, payload: PayloadAction<boolean>) => {
      state.isShowModal = payload.payload
    },

    createStatus: (state, payload: PayloadAction<string>) => {
      const { length } = state.statues
      const newStatus: Status = {
        id: length + 1,
        title: payload.payload,
        order: length,
      }
      state.statues.push(newStatus)
    }
  }
})

export const { setIsShowModal, createStatus } = statuesSlice.actions
export default statuesSlice.reducer
