import React, { TextareaHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

type TextareaProps =  TextareaHTMLAttributes<HTMLTextAreaElement>

interface InnerTextareaProps extends TextareaProps {
  color: string
  borderColor: string
  hoverBorderColor: string
}

const InnerTextarea = styled.textarea<InnerTextareaProps>`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 12px;
  color: ${props => props.color};
  border: 1px solid ${props => props.borderColor};
  border-radius: 4px;
  background-color: transparent;
  
  :hover,
  :focus {
    border-color: ${props => props.hoverBorderColor};
  }
`

const Textarea:React.FC<TextareaProps> = (props) => {
  const theme = useTheme()
  return (
    <InnerTextarea
      color={theme.input.color}
      borderColor={theme.input.borderColor}
      hoverBorderColor={theme.input.hoverBorderColor}
      {...props}
    />
  )
}

export default Textarea
