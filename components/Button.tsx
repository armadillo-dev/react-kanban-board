/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler } from 'react'
import styled from '@emotion/styled'
import { css, useTheme } from '@emotion/react'

type Props = {
  className?: string
  onClick?: MouseEventHandler
}

const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
}) => {
  const theme = useTheme()

  return (
    <button
      css={css`
        padding: 0.5rem 1.5rem;
        border-radius: 4px;
        border: 1px solid ${theme.button.borderColor};
        background-color: ${theme.button.backgroundColor};
        font-weight: 500;
        color: ${theme.button.color};
        vertical-align: middle;
        cursor: pointer;
        transition: 0.2s;

        :hover {
          background-color: ${theme.button.hoverColor};
        }
      `}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
