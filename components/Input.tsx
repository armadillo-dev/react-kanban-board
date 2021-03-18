import React, { ChangeEventHandler } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

interface InnerInputProps {
  color: string
  borderColor: string
  hoverBorderColor: string
}

interface InputProps {
  id: string
  type: string
  value: string
  required?: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

const InnerInput = styled.input<InnerInputProps>`
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

const Input: React.FC<InputProps> = (props) => {
  const theme = useTheme()
  return (
    <InnerInput
      color={theme.input.color}
      borderColor={theme.input.borderColor}
      hoverBorderColor={theme.input.hoverBorderColor}
      {...props}
    />
  )
}

export default Input
