import * as React from 'react'

import { render } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should', () => {
    const { getByText } = render(<Button>Ooi</Button>)
    console.log('')
    expect(getByText('Ooi')).toBeInTheDocument()
  })
})
