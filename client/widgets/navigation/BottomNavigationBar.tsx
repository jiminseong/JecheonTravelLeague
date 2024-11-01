import Image from 'next/image';
import React from 'react';
import mateIconUrl from '@/public/icons/mateIcon.svg';
import searchIconUrl from '@/public/icons/searchIcon.svg';
import profileIconUrl from '@/public/icons/profileIcon.svg';
import Link from 'next/link';

interface BottomNavigationBarProps {}

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = () => {
    return (
        <div className="z-5 absolute bottom-0 left-0 flex h-16 w-full justify-around bg-[#FFF] shadow-custom">
            <div className="flex cursor-pointer flex-col items-center justify-center">
                <Image src={searchIconUrl} alt="검색아이콘" />
                <p className="text-xs text-center text-lightgrey">검색</p>
            </div>

            <Link className="flex justify-center" href={'/ai'}>
                <Image className="cursor-pointer" src={mateIconUrl} alt="메이트아이콘" />
            </Link>
            <div className="flex cursor-pointer flex-col items-center justify-center">
                <Image src={profileIconUrl} alt="유저아이콘" />
                <p className="text-xs text-center text-lightgrey">내정보</p>
            </div>
        </div>
    );
};

export default BottomNavigationBar;
