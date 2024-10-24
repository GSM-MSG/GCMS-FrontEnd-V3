import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center text-h4 px-5 py-3 justify-center whitespace-nowrap font-Pretendard rounded-sm h-12 disabled:pointer-events-none disabled:text-body2 disabled:!text-gray-600',
  {
    variants: {
      variant: {
        default:
          '!text-black bg-main-500 active:bg-main-300 disabled:bg-gray-200',
        Secondary:
          '!text-main-500 bg-black border-main-500 border-1 border-solid active:!text-main-400 active:border-main-400 disabled:border-gray-300',
        Text: '!text-main-500 active:!text-main-300',
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

const BorderButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
BorderButton.displayName = 'BorderButton';

export { BorderButton, buttonVariants };
