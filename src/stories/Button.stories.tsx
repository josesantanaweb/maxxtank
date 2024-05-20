import { Button } from '@/components'
import { Sizes as InputSizes } from '@/constants'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    sourceLink: 'https://github.com/tremorlabs/tremor/tree/main/src/components/input-elements/Button',
  },
}

export default meta
type Story = StoryObj<typeof Button>

const SizesTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <div className="grid grid-cols-5 gap-2">
        {Object.values(InputSizes).map((size) => (
          <>
            <Button {...args} size={size}>
              Button
            </Button>
            <Button {...args} size={size} icon="icon-user">
              Button
            </Button>
            <Button {...args} size={size} icon="icon-user" iconPosition="right">
              Button
            </Button>
            <Button {...args} size={size} variant="primary" icon="icon-user" iconPosition="left">
              Button
            </Button>
            <Button {...args} size={size} variant="light" icon="icon-user" iconPosition="right">
              Button
            </Button>
          </>
        ))}
      </div>
    )
  },
}

export const Sizes: Story = {
  ...SizesTemplate,
  args: {
    onClick: () => alert(2),
    className: 'max-w-fit',
  },
}
