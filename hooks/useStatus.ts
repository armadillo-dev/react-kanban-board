import { useAppDispatch, useAppSelector } from '../stores'
import {
  setIsShowModal,
  createStatus as createStatusAction,
} from '../stores/statuses'

export default function useStatus() {
  const isShowStatusModal = useAppSelector(state => state.statues.isShowModal)
  const dispatch = useAppDispatch()

  const showStatusModal = () => {
    dispatch(setIsShowModal(true))
  }

  const hideStatusModal = () => {
    dispatch(setIsShowModal(false))
  }

  const createStatus = (title: string) => {
    dispatch(createStatusAction(title))
  }

  return {
    isShowStatusModal,
    showStatusModal,
    hideStatusModal,
    createStatus,
  }
}
