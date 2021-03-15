import { createSlice } from '@reduxjs/toolkit'
import { Issue } from '../types'

export interface IssuesState {
  issues: Issue[]
}

const initialState: IssuesState = {
  issues: [
    {
      id: 1,
      status: 1,
      title: 'issue #1',
      content: 'issue content',
      order: 0,
    },
    {
      id: 4,
      status: 1,
      title: 'issue #4',
      content: 'issue content',
      order: 1,
    },
    {
      id: 2,
      status: 2,
      title: 'issue #2',
      content: 'issue content',
      order: 0,
    },
    {
      id: 3,
      status: 3,
      title: 'issue #3',
      content: 'issue content',
      order: 0,
    },
  ]
}

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
  }
})

export const { } = issuesSlice.actions
export default issuesSlice.reducer
