import React from 'react'

function BoxIconWithText({
  children
}: {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}) {
  return <div className="box-icon-with-text">{children}</div>
}

export default BoxIconWithText
