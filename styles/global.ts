import emotionReset from 'emotion-reset'
import { css } from '@emotion/react'

export default css`
  ${emotionReset}
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-size: 14px;
  }
  
  body > div:first-of-type {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6, 
  p {
    margin: 0 0 1rem 0;
    padding: 0;
  }

  html,
  body,
  input, 
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`
