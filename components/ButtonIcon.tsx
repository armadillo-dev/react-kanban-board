import React, { MouseEventHandler } from 'react'
import { Icon } from '@mdi/react'
import styled from '@emotion/styled'

interface ButtonIconProps {
  path: string
  size: number
  color: string
  className?: string
  onClick?: MouseEventHandler
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

