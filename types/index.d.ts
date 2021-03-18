export interface Issue {
  id: number
  statusId: number
  title: string
  content: string
  order: number
}

export interface NewIssue {
  statusId: number
  title: string
  content: string
}

export interface Status {
  id: number
  title: string
  order: number
}

export interface StatusWithIssues extends Status {
  issues: Issue[]
}
