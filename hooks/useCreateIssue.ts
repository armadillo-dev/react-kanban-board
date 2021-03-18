import { useAppDispatch, useAppSelector } from '../stores'
import { setIsShowModal, createIssue as createIssueAction } from '../stores/issues'
import { NewIssue } from '../types'

export default function useCreateIssue() {
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

  return {
    isShowCreateIssue: isShowCreateIssueModal,
    showCreateIssueModal,
    hideCreateIssueModal,
    createIssue,
  }
}
