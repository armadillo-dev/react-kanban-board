import { useAppDispatch, useAppSelector } from '../stores'
import {
  setIsShowModal,
  createIssue as createIssueAction,
  deleteIssue as deleteIssueAction,
} from '../stores/issues'
import { Issue, NewIssue } from '../types'

export default function useIssue() {
  const isShowIssueModal = useAppSelector(state => state.issues.isShowModal)
  const dispatch = useAppDispatch()

  const showIssueModal = () => {
    dispatch(setIsShowModal(true))
  }

  const hideIssueModal = () => {
    dispatch(setIsShowModal(false))
  }

  const createIssue = (issue: NewIssue) => {
    dispatch(createIssueAction(issue))
  }

  const deleteIssue = (issue: Issue) => {
    dispatch(deleteIssueAction(issue))
  }

  return {
    isShowIssueModal,
    showIssueModal,
    hideIssueModal,
    createIssue,
    deleteIssue,
  }
}
