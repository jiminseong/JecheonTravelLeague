import Button from '@/widgets/button/Button';
import BottomNavigationBar from '@/widgets/navigation/BottomNavigationBar';
import React from 'react';
import exampleImageUrl from '@/public/images/exampleImage.png';
import leftArrowIconUrl from '@/public/icons/leftArrow.svg';
import Image from 'next/image';
import Link from 'next/link';
interface SnsResultPageProps {}

const SnsResultPage: React.FC<SnsResultPageProps> = ({}) => {
    return (
        <div className="relative h-[100vh] w-full overflow-hidden pb-[20%]">
            <Link href="/home" className="absolute left-4 top-4">
                <Image src={leftArrowIconUrl} alt="되돌아가기아이콘" />
            </Link>
            <div className="flex h-full w-full flex-col gap-[1em] overflow-x-hidden overflow-y-scroll">
                <Image src={exampleImageUrl} alt="예시이미지" />
                <div className="flex w-full flex-col gap-4 bg-[#FFF] px-8 py-8">
                    <p className="text-[1.25em] font-semibold text-black">제목 : 제천 어쩌고 저쩌고</p>
                    <p className="text-[1em] font-semibold text-[#848484]">
                        제천에 대한 내용, 제천에 대한 내용제천에 대한 내용제천에 대한 내용제천에 대한 내용제천에 대한
                        내용제천에 대한 내용제천에 대한 내용제천에 대한 내용제천에 대한
                    </p>
                    <p className="text-[1em] font-semibold text-[#848484]">
                        제천에 대한 내용, 제천에 대한 내용제천에 대한 내용제천에 대한 내용제천에 대한 내용제천에 대한
                        내용제천에 대한 내용제천에 대한 내용제천에 대한 내용제천에 대한
                    </p>
                </div>
                <div className="mt-4 px-4">
                    <Button size="full" variant="primary">
                        SNS 공유하기
                    </Button>
                </div>
            </div>
            <BottomNavigationBar />
        </div>
    );
};

export default SnsResultPage;
