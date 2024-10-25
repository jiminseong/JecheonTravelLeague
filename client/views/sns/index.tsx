'use client';
import BottomNavigationBar from '@/widgets/navigation/BottomNavigationBar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import leftArrow2Url from '@/public/icons/leftArrow2.svg';
import Input from '@/widgets/input/Input';
import TextArea from '@/widgets/input/TextArea';
import ImageUploader from './ui/ImageUploader';
import SelectSnsPlatform from './ui/SelectSnsPlatform';
import Button from '@/widgets/button/Button';
import { useRouter } from 'next/navigation';

interface SnsPageProps {}

const SnsPage: React.FC<SnsPageProps> = ({}) => {
    const router = useRouter();
    return (
        <div className="relative h-[100vh] w-full overflow-hidden px-[1em] pb-[20%] pt-[35%] md:pt-[25%]">
            {/* 상단 네비게이션 */}

            <div className="absolute left-0 top-[54px] flex w-full items-center justify-between px-[1em]">
                <div className="flex gap-[1em]">
                    <Link className="flex" href="/home">
                        <Image src={leftArrow2Url} alt="되돌아가기아이콘" />
                    </Link>
                    <p className="text-[28px] font-bold text-black">SNS 공유하기</p>
                </div>
                <div className="box-border rounded-[12.14px] bg-jorange px-[0.5em] py-[0.125em] text-center text-[0.8125em] font-semibold text-white">
                    임시 저장
                </div>
            </div>

            {/* 스크롤 가능한 메인 콘텐츠 영역 */}
            <div className="flex h-full w-full flex-col gap-[1em] overflow-x-hidden overflow-y-scroll">
                <div className="w-full">
                    <Input className="w-full" placeholder="장소" />
                </div>
                <div className="w-full">
                    <Input className="w-full" placeholder="일시" />
                </div>
                <div className="w-full">
                    <TextArea className="w-full" placeholder="내용" />
                </div>
                <ImageUploader />
                <SelectSnsPlatform />
                <Button size="full" variant="primary" onClick={() => router.push('/sns/result')}>
                    SNS 템플릿 만들기
                </Button>
            </div>
            <BottomNavigationBar />
        </div>
    );
};

export default SnsPage;
