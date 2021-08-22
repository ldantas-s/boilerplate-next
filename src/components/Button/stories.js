import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
}

export const ButtonDefault = args => <Button {...args} />
ButtonDefault.args = {
  color: 'white',
  bgColor: 'black',
}
