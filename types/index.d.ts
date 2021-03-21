export interface Issue {
  id: number
  statusId: number
  title: string
  content: string
  order: number
}

export type NewIssue = Omit<Issue, 'id' | 'order'>

export interface Status {
  id: number
  title: string
  order: number
}

export interface StatusWithIssues extends Status {
  issues: Issue[]
}
