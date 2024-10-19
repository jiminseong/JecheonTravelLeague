interface Props {
    placeholder?: string;
    style?: string;
}

export default function LineInput({ placeholder, style }: Props) {
    return (
        <input
            className={`${style} bg-transperent border-jgreen type="text" box-border border-b-2 px-1 font-light text-black placeholder-lightgrey focus:outline-none`}
            placeholder={placeholder}
        />
    );
}
