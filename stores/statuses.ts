import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../types'


export interface StatusesState {
  statues: Status[]
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
  ]
}

export const statuesSlice = createSlice({
  name: 'statues',
  initialState,
  reducers: {
  }
})

export const { } = statuesSlice.actions
export default statuesSlice.reducer
