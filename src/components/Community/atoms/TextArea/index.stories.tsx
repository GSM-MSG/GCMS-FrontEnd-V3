import { useState } from 'react';
import { TextArea } from '.';
import type { Meta, StoryObj } from '@storybook/react';
import { TextAreaProps } from '@/types/components/Community/textAreaType';

const meta: Meta<typeof TextArea> = {
  title: 'Components/Community/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    maxLength: { control: 'number' },
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<TextAreaProps>;

export const Title: Story = {
  args: {
    placeholder: '제목 입력',
    maxLength: 30,
    text: 'text-h2',
  },
  render: (args) => {
    const [title, setTitle] = useState<string>('');

    return <TextArea {...args} state={title} setState={setTitle} />;
  },
};

export const Content: Story = {
  args: {
    placeholder: '내용 입력',
    maxLength: 1000,
    text: 'text-body1',
  },
  render: (args) => {
    const [content, setContent] = useState<string>('');

    return <TextArea {...args} state={content} setState={setContent} />;
  },
};
