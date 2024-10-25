import Container from '@/widgets/container/Container';
import Image from 'next/image';
import React from 'react';
import naverIconUrl from '@/public/icons/naverIcon.svg';
import youtubeIconUrl from '@/public/icons/youtubeIcon.svg';
import instarIconUrl from '@/public/icons/instarIcon.svg';
import twitterIconUrl from '@/public/icons/twitterIcon.svg';

interface SelectSnsPlatformProps {}

const SelectSnsPlatform: React.FC<SelectSnsPlatformProps> = ({}) => {
    return (
        <div>
            <Container className="flex h-[74px] w-full items-center justify-around">
                <div className="hover:fill-[#8ADF28]">
                    <Image src={naverIconUrl} alt="네이버" />
                </div>
                <div className="hover:fill-[#8ADF28]">
                    <Image src={youtubeIconUrl} alt="유튜브" />
                </div>
                <div className="hover:fill-[#8ADF28]">
                    <Image src={instarIconUrl} alt="인스타" />
                </div>
                <div className="hover:fill-[#8ADF28]">
                    <Image src={twitterIconUrl} alt="트위터" />
                </div>
            </Container>
        </div>
    );
};

export default SelectSnsPlatform;
