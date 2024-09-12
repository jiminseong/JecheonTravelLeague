import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: 'small' | 'full';
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
}
const SIZE_MAP: { [k in Props['size']]: string } = {
    small: 'w-[50%] rounded-md',
    full: 'w-full rounded-full',
};
const VARIANT_MAP: { [k in Props['variant']]: string } = {
    primary:
        'bg-primary text-black hover:bg-primary hover:text-black active:bg-primary active:text-black disabled:bg-primary disabled:text-primary',
    secondary:
        'bg-secondary text-black hover:bg-primary hover:text-black active:bg-primary active:text-black disabled:bg-primary disabled:text-primary',
};

export default function Button({ size, variant, children, ...rest }: Props) {
    return (
        <button
            className={`flex items-center justify-center rounded-xl border-0 ${SIZE_MAP[size]} ${VARIANT_MAP[variant]}`}
            {...rest}
        >
            {children}
        </button>
    );
}
