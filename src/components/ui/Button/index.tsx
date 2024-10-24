import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center text-h4 px-5 py-2 justify-center whitespace-nowrap font-Pretendard rounded-sm h-10 disabled:pointer-events-none disabled:text-body2 disabled:!text-gray-600',
  {
    variants: {
      variant: {
        default: '!text-black bg-white active:bg-gray-450 disabled:bg-gray-200',
        Secondary:
          '!text-white bg-black border-gray-450 border-1 border-solid active:!text-gray-450 disabled:border-gray-300',
        Text: '!text-white active:!text-gray-450',
      },
      size: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
