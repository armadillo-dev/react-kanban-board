/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'
import { mdiBrightness6 } from '@mdi/js';
import Button from './Button'
import { UrlMap } from '../data/enum/UrlMap'
import ActiveLink from './ActiveLink'
import ButtonIcon from './ButtonIcon'
import { css } from '@emotion/react'
import CreateIssueModal from './CreateIssueModal'
import useCreateIssue from '../hooks/useCreateIssue'

type NavigationBarProps = {
  onToggleDarkMode: () => void
  className?: string
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  background-color: #161b22;
`

const Menu = styled(ActiveLink)`
  display: inline-block;
  margin-right: 1.5rem;
  text-decoration: none;
`

const NavigationBar: React.FC<NavigationBarProps> = ({
  onToggleDarkMode,
  className
}) => {
  const {
    isShowCreateIssue,
    showCreateIssueModal: onClickCreateIssue
  } = useCreateIssue()

  return (
    <Wrapper className={className}>
      <Menu href={UrlMap.KanbanBoardPage}>
        칸반보드
      </Menu>
      <Menu href={UrlMap.StatusManagePage}>
        이슈 상태값 지정
      </Menu>
      <Button
        onClick={onClickCreateIssue}
      >
        이슈 만들기
      </Button>
      <ButtonIcon
        path={mdiBrightness6}
        size={1}
        color="white"
        css={css`margin-left: auto`}
        onClick={onToggleDarkMode}
      />
      { isShowCreateIssue && <CreateIssueModal /> }
    </Wrapper>
  )
}

export default NavigationBar
