import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

type ModalContentProps = {
  backgroundColor: string
}

type ModalProps = {
  selector?: string
  className?: string
}

const ModalWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalContent = styled.div<ModalContentProps>`
  min-width: 350px;
  margin-top: 10rem;
  padding: 1.5rem;
  background-color: ${props => props.backgroundColor};
  border-radius: 4px;
`

const Modal:React.FC<ModalProps> = ({
  children,
  selector = '#modal',
  className,
}) => {
  const ref = useRef()
  const [isMounted, setMounted] = useState(false)
  const theme = useTheme()
  const modal = (
    <ModalWrapper>
      <ModalContent
        backgroundColor={theme.modal.backgroundColor}
        className={className}
      >
        {children}
      </ModalContent>
    </ModalWrapper>
  )

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return isMounted ? createPortal(modal, ref.current) : null
}

export default Modal
