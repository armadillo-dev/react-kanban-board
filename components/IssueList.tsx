/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { Issue } from '../types'
import IssueListItem from './IssueListItem'

type ContainerProps = {
  borderColor: string
  backgroundColor: string
}

type BadgeProps = {
  color: string
}

const Container = styled.section<ContainerProps>`
  min-width: 300px;
  max-width: 300px;
  margin: 0 1rem 1rem 0;
  padding: 1rem;
  border: 1px solid ${props => props.borderColor};
  border-radius: 6px;
  background-color: ${props => props.backgroundColor};
`

const IssueTitle = styled.h2`
  display: flex;
  align-items: center;
`

const Badge = styled.span<BadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border-radius: 50%;
  font-weight: 400;
  font-size: 1rem;
  background-color: ${props => props.color};
`

type IssueListProps = {
  title: string
  issues: Issue[]
}

const IssueList: React.FC<IssueListProps> = ({ title, issues }) => {
  const theme = useTheme()
  const count = issues.length

  return (
    <Container
      borderColor={theme.issue.borderColor}
      backgroundColor={theme.issue.listBackgroundColor}
    >
      <IssueTitle>
        <Badge
          color={theme.button.backgroundColor}>
          {count}
        </Badge>
        <span>{title}</span>
      </IssueTitle>
      {issues.map(issue => (
        <IssueListItem
          key={issue.id}
          issue={issue}
        />
      ))}
    </Container>
  )
}

export default IssueList
