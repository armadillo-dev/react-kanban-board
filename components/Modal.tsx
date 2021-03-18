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
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const ModalContent = styled.div<ModalContentProps>`
  min-width: 300px;
  padding: 1rem;
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
