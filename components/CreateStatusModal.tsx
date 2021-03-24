import React, { ChangeEventHandler, FormEventHandler, MouseEventHandler, useState } from 'react'
import ModalForm, { FieldSet, Label } from './ModalForm'
import useStatus from '../hooks/useStatus'
import Input from './Input'

const CreateStatusModal: React.FC = () => {
  const {
    hideStatusModal,
    createStatus,
  } = useStatus()
  const [title, setTitle] = useState('')

  const onInputTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value)
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    createStatus(title)
    hideStatusModal()
  }

  const onClickCancel: MouseEventHandler<HTMLButtonElement> = () => {
    hideStatusModal()
  }
  return (
    <ModalForm
      title="상태 만들기"
      submitText="만들기"
      onSubmit={onSubmit}
      onClickCancel={onClickCancel}
    >
      <FieldSet>
        <Label htmlFor="title">
          상태:
        </Label>
        <Input
          id="title"
          type="text"
          value={title}
          onChange={onInputTitle}
        />
      </FieldSet>
    </ModalForm>
  )
}

export default CreateStatusModal
