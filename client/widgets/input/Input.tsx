interface Props {
    placeholder?: string; // input에 들어갈 placeholder를 추가
    className?: string;
}

export default function Input({ placeholder, className }: Props) {
    return (
        <input
            className={`${className} box-border h-[51px] rounded-[30px] border border-[#9bbc74] bg-jwhite px-4 font-light text-black placeholder-grey focus:outline-none disabled:text-opacity-50`}
            placeholder={placeholder}
        />
    );
}
