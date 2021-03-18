import React, { ChangeEventHandler } from 'react'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

export interface SelectItem<T> {
  text: string
  value: T
}

interface SelectProps {
  id: string
  value: any
  items: SelectItem<any>[]
  onChange: ChangeEventHandler<HTMLSelectElement>
}

interface InnerSelectProps {
  color: string
  borderColor: string
  hoverBorderColor: string
}

const InnerSelect = styled.select<InnerSelectProps>`
  box-sizing: border-box;
  display: block;
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

const Select: React.FC<SelectProps> = ({
  items,
  ...props
}) => {
  const theme = useTheme()

  return (
    <InnerSelect
      color={theme.input.color}
      borderColor={theme.input.borderColor}
      hoverBorderColor={theme.input.hoverBorderColor}
      {...props}
    >
      {items.map(item => (
        <option
          key={item.value}
          value={item.value}
        >
          {item.text}
        </option>
      ))}
    </InnerSelect>
  )
}

export default Select
