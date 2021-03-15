export interface Issue {
  id: number
  status: number
  title: string
  content: string
  order: number
}

export interface Status {
  id: number
  title: string
  order: number
}

export interface StatusWithIssues extends Status {
  issues: Issue[]
}
