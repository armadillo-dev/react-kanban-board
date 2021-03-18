import styled from '@emotion/styled'
import React from 'react'
import { Issue } from '../types'
import { useTheme } from '@emotion/react'

type WrapperProps = {
  backgroundColor: string
  borderColor: string
}

type IssueListItemProps = {
  issue: Issue
}

const Wrapper = styled.div<WrapperProps>`
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid ${props => props.borderColor};
  border-radius: 2px;
  background-color: ${props => props.backgroundColor};
  cursor: move;
`

const IssueListItem: React.FC<IssueListItemProps> = ({ issue }) => {
  const theme = useTheme()

  return (
    <Wrapper
      backgroundColor={theme.issue.backgroundColor}
      borderColor={theme.issue.borderColor}
    >
      <h3>{issue.title}</h3>
      <p>{issue.content}</p>
    </Wrapper>
  )
}

export default IssueListItem
