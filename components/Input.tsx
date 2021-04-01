import React, { InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

interface InnerInputProps extends InputProps {
  color: string
  borderColor: string
  hoverBorderColor: string
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
