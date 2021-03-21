import React from 'react'
import Modal from './Modal'
import Button from './Button'
import styled from '@emotion/styled'

interface DialogProps {
  text: string
  useCancelButton: boolean
  onClickConfirm: () => void
  onClickCancel?: () => void
}

const DialogContent = styled.div`
  min-height: 40px;
  padding-bottom: 1rem;
`

const DialogFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
`

const ConfirmButton = styled(Button)`
  margin-left: 8px;
`

const Dialog: React.FC<DialogProps> = ({
  text,
  useCancelButton,
  onClickConfirm,
  onClickCancel,
}) => {
  return (
    <Modal>
      <DialogContent>
        {text}
      </DialogContent>
      <DialogFooter>
        {useCancelButton && (
          <Button
            onClick={onClickCancel}
          >
            취소
          </Button>
        )}
        <ConfirmButton
          onClick={onClickConfirm}
        >
          확인
        </ConfirmButton>
      </DialogFooter>
    </Modal>
  )
}

export default Dialog
