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

    deleteIssue: (state, payload: PayloadAction<Issue>) => {
      state.issues = state.issues.filter(issue => issue.id !== payload.payload.id)
    },

    changeStatus: (state, payload: PayloadAction<{ issueId: number, statusId: number }>) => {
      const { issueId, statusId } = payload.payload
      const issue = state.issues.find(issue => issue.id === issueId)
      const currentStatusId = issue.statusId

      if (currentStatusId === statusId) {
        return
      }

      const nextOrder = state.issues.filter(issue => issue.statusId === statusId).length

      issue.statusId = statusId
      issue.order = nextOrder

      state.issues
        .filter(issue => issue.statusId === currentStatusId)
        .sort((a, b) =>  b.order - a.order)
        .map((issue, index) => {
          issue.order = index
        })
    }
  }
})

export const {
  setIsShowModal,
  createIssue,
  deleteIssue,
  changeStatus,
} = issuesSlice.actions
export default issuesSlice.reducer
