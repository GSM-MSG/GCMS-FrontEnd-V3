import { Meta, StoryObj } from '@storybook/react';
import { BorderButton } from '.';

const meta = {
  title: 'Shadcn/BorderButton',
  component: BorderButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'Secondary', 'Text'],
    },
    size: {
      control: { type: 'select' },
      options: ['default'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BorderButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: '다음',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'Secondary',
    children: '다음',
  },
};

export const Text: Story = {
  args: {
    variant: 'Text',
    children: '다음',
  },
};

export const DefaultDisabled: Story = {
  args: {
    variant: 'default',
    children: '다음',
    disabled: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: 'Secondary',
    children: '다음',
    disabled: true,
  },
};

export const TextDisabled: Story = {
  args: {
    variant: 'Text',
    children: '다음',
    disabled: true,
  },
};
