import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { CircleX } from '@/assets/icons';
import { cn } from '@/lib/utils';

const textFieldVariants = cva(
  'inline-flex items-center self-stretch text-body2 !text-white font-Pretendard rounded-lg',
  {
    variants: {
      variant: {
        default:
          ' px-4 py-3.5 bg-gray-100 border border-solid focus:!border-main-500 caret-main-500 placeholder:text-gray-450',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textFieldVariants> {
  title: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, variant, title, ...props }, ref) => {
    const [focus, setFocus] = React.useState(false);

    return (
      <div className="relative flex flex-col gap-2">
        <p className="text-h5 text-white">{title}</p>
        <input
          className={cn(textFieldVariants({ variant, className }))}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          ref={ref}
          {...props}
        />
        {focus && (
          <div className="absolute bottom-4 right-4 cursor-pointer">
            <CircleX />
          </div>
        )}
      </div>
    );
  },
);
TextField.displayName = 'TextField';

export { TextField, textFieldVariants };
