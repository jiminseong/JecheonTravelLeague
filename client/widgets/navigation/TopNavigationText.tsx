import React from 'react';

interface TopNavigationTextProps {}

const TopNavigationText: React.FC<TopNavigationTextProps> = ({}) => {
    return (
        <div className="absolute left-0 top-0 flex h-[10%] w-[100%] items-center gap-[1em] bg-jwhite px-[0.5em] pt-[2em] text-left text-[28px] font-bold text-black">
            <p className="cursor-pointer">홈</p>
            <p className="cursor-pointer text-lightgrey">이벤트</p>
        </div>
    );
};

export default TopNavigationText;
