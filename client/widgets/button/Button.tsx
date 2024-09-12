import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: 'medium' | 'full';
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
}

const SIZE_MAP: { [k in Props['size']]: string } = {
    medium: 'w-[80%] py-[1em]  font-semibold',
    full: 'w-full py-[1em] font-semibold', // 올바르게 변경
};

const VARIANT_MAP: { [k in Props['variant']]: string } = {
    primary: 'bg-primary text-black hover:bg-secondary hover:text-white ',
    secondary:
        'bg-secondary text-black hover:bg-primary hover:text-white active:bg-primary active:text-black disabled:bg-secondary disabled:text-opacity-50',
};

export default function Button({ size, variant, children, ...rest }: Props) {
    return (
        <button
            className={`flex items-center justify-center rounded-2xl border-0 ${SIZE_MAP[size]} ${VARIANT_MAP[variant]}`}
            {...rest}
        >
            {children}
        </button>
    );
}
