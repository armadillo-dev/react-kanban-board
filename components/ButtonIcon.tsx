import React, { MouseEventHandler } from 'react'
import { Icon } from '@mdi/react'
import styled from '@emotion/styled'

interface Props {
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

const ButtonIcon: React.FC<Props> = ({
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

