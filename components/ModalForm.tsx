/** @jsxImportSource @emotion/react */
import React, { FormEventHandler, HTMLAttributes, MouseEventHandler } from 'react'
import styled from '@emotion/styled'
import Modal from './Modal'
import Button from './Button'
import { css } from '@emotion/react'

type LabelProps = HTMLAttributes<HTMLLabelElement>

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

export const FieldSet = styled.fieldset`
  display: block;
  margin-bottom: 1.5rem;
`

export const Label = styled.label<LabelProps>`
  display: block;
  margin-bottom: 12px;
`

const ModalAction = styled.footer`
  display: flex;
  justify-content: flex-end;
`

interface ModalFormProps {
  title: string
  submitText?: string
  onClickCancel: MouseEventHandler<HTMLButtonElement>
  onSubmit: FormEventHandler<HTMLFormElement>
}

const ModalForm: React.FC<ModalFormProps> = ({
  title,
  submitText = '저장',
  children,
  onClickCancel,
  onSubmit,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <form onSubmit={onSubmit}>
        {children}
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
            {submitText}
          </Button>
        </ModalAction>
      </form>
    </Wrapper>
  )
}

export default ModalForm
