import React from 'react';
import classNames from 'classnames';

interface InputProps extends React.ComponentProps<'input'> {
    className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <input
            ref={ref}
            className={classNames('w-full px-4 py-2 rounded-lg bg-gray-100 text-sm', className)}
            {...rest}
        />
    );
});

Input.displayName = 'Input';
