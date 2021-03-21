import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { mdiCloseCircle } from '@mdi/js';
import React, { useState } from 'react'
import { Issue } from '../types'
import ButtonIcon from './ButtonIcon'
import useIssue from '../hooks/useIssue'
import Dialog from './Dialog'

type WrapperProps = {
  backgroundColor: string
  borderColor: string
}

type IssueListItemProps = {
  issue: Issue
}

const Wrapper = styled.article<WrapperProps>`
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid ${props => props.borderColor};
  border-radius: 2px;
  background-color: ${props => props.backgroundColor};
  cursor: move;
`

const IssueHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const IssueTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0 auto 0 0;
`

const IssueListItem: React.FC<IssueListItemProps> = ({ issue }) => {
  const theme = useTheme()
  const { deleteIssue } = useIssue()
  const [isShowConfirm, setIsShowConfirm] = useState(false)

  const onClickDelete = () => {
    setIsShowConfirm(true)
  }

  const onClickCancelDelete = () => {
    setIsShowConfirm(false)
  }

  const onClickConfirmDelete = () => {
    deleteIssue(issue)
    setIsShowConfirm(false)
  }

  return (
    <>
      <Wrapper
        backgroundColor={theme.issue.backgroundColor}
        borderColor={theme.issue.borderColor}
      >
        <IssueHeader>
          <IssueTitle>{issue.title}</IssueTitle>
          <ButtonIcon
            path={mdiCloseCircle}
            size={1}
            color={theme.button.color}
            onClick={onClickDelete}
          />
        </IssueHeader>
        <p>{issue.content}</p>
      </Wrapper>
      {isShowConfirm && (
        <Dialog
          text="정말로 삭제하시겠습니까?"
          useCancelButton
          onClickCancel={onClickCancelDelete}
          onClickConfirm={onClickConfirmDelete}
        />
      )}
    </>
  )
}

export default IssueListItem
