import React from 'react';

interface TextAreaProps {
    className?: string;
    placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ className, placeholder }) => {
    return (
        <textarea
            className={`${className} box-border flex h-[200px] resize-none rounded-[30px] border border-jgreen bg-jwhite px-4 py-4 text-start font-light text-black placeholder-grey focus:outline-none disabled:text-opacity-50`}
            placeholder={placeholder}
        ></textarea>
    );
};

export default TextArea;
