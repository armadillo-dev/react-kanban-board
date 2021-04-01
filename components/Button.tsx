/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes } from 'react'
import { css, useTheme } from '@emotion/react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
  children,
  ...props
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

        :hover,
        :focus {
          background-color: ${theme.button.hoverColor};
        }
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
