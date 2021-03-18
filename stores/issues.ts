import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Issue, NewIssue } from '../types'

export interface IssuesState {
  issues: Issue[]
  isShowModal: boolean
}

const initialState: IssuesState = {
  issues: [
    {
      id: 1,
      statusId: 1,
      title: 'issue #1',
      content: 'issue content',
      order: 0,
    },
    {
      id: 4,
      statusId: 1,
      title: 'issue #4',
      content: 'issue content',
      order: 1,
    },
    {
      id: 2,
      statusId: 2,
      title: 'issue #2',
      content: 'issue content',
      order: 0,
    },
    {
      id: 3,
      statusId: 3,
      title: 'issue #3',
      content: 'issue content',
      order: 0,
    },
  ],
  isShowModal: false,
}

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    setIsShowModal: (state, payload: PayloadAction<boolean>) => {
      state.isShowModal = payload.payload
    },
    createIssue: (state, payload: PayloadAction<NewIssue>) => {
      const sameStatusIssue = issue => issue.statusId === payload.payload.statusId
      const sameStatusIssueCount = state.issues.filter(sameStatusIssue).length
      const newIssue: Issue = {
        id: state.issues.length + 1,
        ...payload.payload,
        order: sameStatusIssueCount,
      }

      state.issues.push(newIssue)
    },
  }
})

export const { setIsShowModal, createIssue } = issuesSlice.actions
export default issuesSlice.reducer
