import { useAppDispatch, useAppSelector } from '../stores'
import {
  setIsShowModal,
  createIssue as createIssueAction,
  deleteIssue as deleteIssueAction,
} from '../stores/issues'
import { Issue, NewIssue } from '../types'

export default function useIssue() {
  const isShowCreateIssueModal = useAppSelector(state => state.issues.isShowModal)
  const dispatch = useAppDispatch()

  const showCreateIssueModal = () => {
    dispatch(setIsShowModal(true))
  }

  const hideCreateIssueModal = () => {
    dispatch(setIsShowModal(false))
  }

  const createIssue = (issue: NewIssue) => {
    dispatch(createIssueAction(issue))
  }

  const deleteIssue = (issue: Issue) => {
    dispatch(deleteIssueAction(issue))
  }

  return {
    isShowCreateIssue: isShowCreateIssueModal,
    showCreateIssueModal,
    hideCreateIssueModal,
    createIssue,
    deleteIssue,
  }
}
