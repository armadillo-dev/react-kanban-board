import React from 'react'
import styled from '@emotion/styled'
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'
import Button from './Button'
import useStatus from '../hooks/useStatus'

const CreateButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 300px;
  height: 60px;
  border-radius: 6px;
  border-style: dashed;
  background: transparent;
`

const Text = styled.span`
  margin-left: 4px;
`

const CreateStatusButton: React.FC = () => {
  const {
    showStatusModal: onClick
  } = useStatus()

  return (
    <CreateButton
      onClick={onClick}
    >
      <Icon
        path={mdiPlus}
        size={1}
      />
      <Text>상태 만들기</Text>
    </CreateButton>
  )
}

export default CreateStatusButton
