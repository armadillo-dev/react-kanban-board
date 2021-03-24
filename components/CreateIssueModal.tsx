/** @jsxImportSource @emotion/react */
import React, {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from 'react'
import Input from './Input'
import Textarea from './Textarea'
import useIssue from '../hooks/useIssue'
import Select, { SelectItem } from './Select'
import { useAppSelector } from '../stores'
import { NewIssue } from '../types'
import ModalForm, { FieldSet, Label } from './ModalForm'

const CreateIssueModal: React.FC = () => {
  const { hideIssueModal, createIssue } = useIssue()
  const statusItems: SelectItem<number>[] = useAppSelector(state => state.statues.statues)
    .map(status => ({
      text: status.title,
      value: status.id,
    }))
  const [firstStatus] = statusItems
  const [statusId, setStatusId] = useState(firstStatus?.value ?? 0)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onChangeStatusId: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setStatusId(Number(event.target.value))
  }

  const onInputTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value)
  }

  const onInputContent: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setContent(event.target.value)
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    const newIssue: NewIssue = {
      statusId,
      title: title.trim(),
      content: content.trim(),
    }

    event.preventDefault()
    createIssue(newIssue)
    hideIssueModal()
  }

  const onClickCancel: MouseEventHandler<HTMLButtonElement> = () => {
    hideIssueModal()
  }

  return (
    <ModalForm
      title="이슈 만들기"
      submitText="만들기"
      onSubmit={onSubmit}
      onClickCancel={onClickCancel}
    >
      <FieldSet>
        <Label htmlFor="statusId">
          상태:
        </Label>
        <Select
          id="statusId"
          value={statusId}
          items={statusItems}
          onChange={onChangeStatusId}
        />
      </FieldSet>
      <FieldSet>
        <Label htmlFor="title">
          제목:
        </Label>
        <Input
          id="title"
          type="text"
          value={title}
          required
          onChange={onInputTitle}
        />
      </FieldSet>
      <FieldSet>
        <Label htmlFor="content">
          내용:
        </Label>
        <Textarea
          id="content"
          value={content}
          rows={10}
          required
          onChange={onInputContent}
        />
      </FieldSet>
    </ModalForm>
  )
}

export default CreateIssueModal
