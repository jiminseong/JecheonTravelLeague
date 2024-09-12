import Image from 'next/image';
import React from 'react';
import jecheonLogo from '/public/images/jecheonLogo.svg';

interface SecondOnboardingProps {}

const SecondOnboarding: React.FC<SecondOnboardingProps> = ({}) => {
    return (
        <div className="flex h-[70%] flex-col items-center justify-center gap-[1em]">
            <div className="text-lg font-semibold">자연 치유의 도시 제천 여행은 제천 메이트와!</div>
            <div className="text-grey">제천시 추천 맛집, AI 추천 코스 까지!</div>
            <Image src={jecheonLogo} alt="제천시 로고" width={150} />
        </div>
    );
};

export default SecondOnboarding;
