import React from 'react'
import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
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

interface ActiveLinkProps extends LinkProps {
  href: string
  className?: string
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  className,
  children,
  ...props
}) => {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <Link
      passHref
      href={href}
      {...props}
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
