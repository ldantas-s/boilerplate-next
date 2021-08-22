import * as React from 'react'

import styled from 'styled-components'

const ButtonBase = styled.button`
  padding: 8px 16px;
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`
const Button = ({ children, ...props }) => (
  <ButtonBase {...props}>{children}</ButtonBase>
)

export default Button
