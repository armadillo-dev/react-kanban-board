import React from 'react'
import Head from 'next/head'
import IssueList from '../components/IssueList'
import styled from '@emotion/styled'
import { IssuesByStatus, StatusWithIssues } from '../types'
import CreateStatusButton from '../components/CreateStatusButton'
import useStatus from '../hooks/useStatus'
import CreateStatusModal from '../components/CreateStatusModal'
import useIssue from '../hooks/useIssue'

const Container = styled.main`
  display: flex;
  flex: auto;
  overflow-x: auto;
  padding: 1.5rem;
`

const KanbanBoardPage: React.FC = () => {
  const { isShowStatusModal } = useStatus()
  const { issues } = useIssue()
  const { statues } = useStatus()
  const issuesByStatues: IssuesByStatus = [...issues]
    .sort((a, b) => a.order - b.order)
    .reduce((result, current) => {
      if (!result.hasOwnProperty(current.statusId)) {
        result[current.statusId] = [current]
        return result
      }

      result[current.statusId].push(current)
      return result
    }, {})
  const statuesByIssues: StatusWithIssues[] = statues.map(status => ({
    ...status,
    issues: issuesByStatues[status.id] ?? [],
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
            status={status}
            issues={status.issues}
          />
        ))}
        <CreateStatusButton />
      </Container>
      {isShowStatusModal && <CreateStatusModal />}
    </>
  )
}

export default KanbanBoardPage
