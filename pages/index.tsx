import React from 'react'
import Head from 'next/head'
import IssueList from '../components/IssueList'
import styled from '@emotion/styled'
import { useAppSelector } from '../stores'
import { StatusWithIssues } from '../types'

const Container = styled.main`
  display: flex;
  flex: auto;
  overflow-x: auto;
  padding: 1.5rem;
`

const KanbanBoardPage: React.FC = () => {
  const issues = useAppSelector(state => state.issues.issues)
  const statues = useAppSelector(state => state.statues.statues)
  const issuesByStatues = issues.reduce((result, current) => {
    if (result.hasOwnProperty(current.statusId)) {
      result[current.statusId].push(current)
    } else {
      result[current.statusId] = [current]
    }

    return result
  }, {})
  const statuesByIssues: StatusWithIssues[] = statues.map(status => ({
    ...status,
    issues: issuesByStatues[status.id]
  }))

  return (
    <>
      <Head>
        <title>칸반보드</title>
      </Head>
      <Container>
        {statuesByIssues.map(status => (
          <IssueList
            key={status.id}
            title={status.title}
            issues={status.issues}
          />
        ))}
      </Container>
    </>
  )
}

export default KanbanBoardPage
