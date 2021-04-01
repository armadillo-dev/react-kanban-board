import React  from 'react'
import { Icon } from '@mdi/react'
import styled from '@emotion/styled'
import { ButtonProps } from './Button'

interface ButtonIconProps extends ButtonProps {
  path: string
  size: number
  color: string
}

const Wrapper = styled.button`
  background: none;
  border: 0 none;
  cursor: pointer;
`

const ButtonIcon: React.FC<ButtonIconProps> = ({
  className,
  onClick,
  ...iconProps
}) => {
  return (
    <Wrapper
      className={className}
      onClick={onClick}
    >
      <Icon
        {...iconProps}
      />
    </Wrapper>
  )
}

export default ButtonIcon

