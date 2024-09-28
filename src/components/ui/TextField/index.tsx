import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { Label } from '../Label';
import { CircleX } from '@/assets/icons';
import { cn } from '@/lib/utils';

const textFieldVariants = cva(
  'inline-flex items-center self-stretch text-body2 !text-white font-Pretendard rounded-lg',
  {
    variants: {
      variant: {
        default:
          ' px-4 py-3.5 bg-gray-100 border-solid focus:!border border-main-500 caret-main-500 placeholder:text-gray-450',
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
  error: boolean;
  errorMessage: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, variant, title, error, errorMessage, ...props }, ref) => {
    const [focus, setFocus] = React.useState(false);

    return (
      <div className="flex flex-col gap-1">
        <div className="relative flex flex-col gap-2">
          <Label>{title}</Label>
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
        {error && <p className="!text-body3 text-error">{errorMessage}</p>}
      </div>
    );
  },
);
TextField.displayName = 'TextField';

export { TextField, textFieldVariants };
