/** @jsxImportSource @emotion/react */
import React, {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from 'react'
import Modal from './Modal'
import styled from '@emotion/styled'
import Input from './Input'
import Textarea from './Textarea'
import Button from './Button'
import useCreateIssue from '../hooks/useCreateIssue'
import { css } from '@emotion/react'
import Select, { SelectItem } from './Select'
import { useAppSelector } from '../stores'
import { NewIssue } from '../types'

interface LabelProps {
  htmlFor: string
}

const Wrapper = styled(Modal)`
  align-self: start;
  width: 60%;
  max-width: 500px;
  margin-top: 80px;
  padding: 2rem;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
`

const Title = styled.h3`
  margin-bottom: 2rem;
  font-size: 1.3rem;
  font-weight: bold;
`

const FieldSet = styled.fieldset`
  display: block;
  margin-bottom: 1.5rem;
`

const Label = styled.label<LabelProps>`
  display: block;
  margin-bottom: 12px;
`

const ModalAction = styled.footer`
  display: flex;
  justify-content: flex-end;
`

const CreateIssueModal: React.FC = () => {
  const { hideCreateIssueModal, createIssue } = useCreateIssue()
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
    hideCreateIssueModal()
  }

  const onClickCancel: MouseEventHandler<HTMLButtonElement> = () => {
    hideCreateIssueModal()
  }

  return (
    <Wrapper>
      <Title>이슈 만들기</Title>
      <form onSubmit={onSubmit}>
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
        <ModalAction>
          <Button
            type="reset"
            css={css`margin-right: 8px`}
            onClick={onClickCancel}
          >
            취소
          </Button>
          <Button
            type="submit"
          >
            생성
          </Button>
        </ModalAction>
      </form>
    </Wrapper>
  )
}

export default CreateIssueModal
