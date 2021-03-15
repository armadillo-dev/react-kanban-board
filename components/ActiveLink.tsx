import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from '@emotion/styled'

type InnerLinkProps = {
  isActive: boolean
}

const InnerLink = styled.a<InnerLinkProps>`
  color: ${props => props.isActive ? 'white': '#ccc'};

  :hover {
    color: white;
  }
`

type ActiveLinkProps = {
  href: string
  className?: string
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  className,
  children
}) => {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <Link
      passHref
      href={href}
    >
      <InnerLink
        isActive={isActive}
        className={className}
      >
        {children}
      </InnerLink>
    </Link>
  )
}

export default ActiveLink
