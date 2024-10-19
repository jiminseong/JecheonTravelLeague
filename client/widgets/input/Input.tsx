interface Props {
    size: 'small' | 'full';
    placeholder?: string; // input에 들어갈 placeholder를 추가
}

const SIZE_MAP: { [k in Props['size']]: string } = {
    small: 'w-[50%] rounded-md',
    full: 'w-full py-[1em] rounded-xl font-semibold',
};

export default function Input({ size, placeholder }: Props) {
    return (
        <input
            className={`box-border rounded-full border-[1px] border-black bg-lightgrey2 px-4 font-light text-black placeholder-grey focus:outline-none disabled:text-opacity-50 ${SIZE_MAP[size]}`}
            placeholder={placeholder}
        />
    );
}
