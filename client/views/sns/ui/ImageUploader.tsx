'use client';
import Container from '@/widgets/container/Container';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import uploadIconIrl from '@/public/icons/uploadIcon.svg';

interface ImageUploaderProps {}

const ImageUploader: React.FC<ImageUploaderProps> = ({}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [translate, setTranslate] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const images = [
        {
            id: 0,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em]">
                    <div className="display flex h-[80%] w-full cursor-pointer items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-[#009fe0]/[0.12]">
                        <Image src={uploadIconIrl} alt="이미지 업로드" />
                    </div>
                    <p className="px-4 pt-1 text-[1em] text-black">사진 이름1</p>
                    <p className="px-4 pb-4 text-[0.8125em] text-[#848484]">사진에 대한 설명 1</p>
                </Container>
            ),
        },
        {
            id: 1,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em]">
                    <div className="display flex h-[80%] w-full cursor-pointer items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-[#009fe0]/[0.12]">
                        <Image src={uploadIconIrl} alt="이미지 업로드" />
                    </div>
                    <p className="px-4 pt-1 text-[1em] text-black">사진 이름1</p>
                    <p className="px-4 pb-4 text-[0.8125em] text-[#848484]">사진에 대한 설명 1</p>
                </Container>
            ),
        },
        {
            id: 2,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em]">
                    <div className="display flex h-[80%] w-full cursor-pointer items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-[#009fe0]/[0.12]">
                        <Image src={uploadIconIrl} alt="이미지 업로드" />
                    </div>
                    <p className="px-4 pt-1 text-[1em] text-black">사진 이름1</p>
                    <p className="px-4 pb-4 text-[0.8125em] text-[#848484]">사진에 대한 설명 1</p>
                </Container>
            ),
        },
        {
            id: 3,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em]">
                    <div className="display flex h-[80%] w-full cursor-pointer items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-[#009fe0]/[0.12]">
                        <Image src={uploadIconIrl} alt="이미지 업로드" />
                    </div>
                    <p className="px-4 pt-1 text-[1em] text-black">사진 이름1</p>
                    <p className="px-4 pb-4 text-[0.8125em] text-[#848484]">사진에 대한 설명 1</p>
                </Container>
            ),
        },
        {
            id: 4,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em]">
                    <div className="display flex h-[80%] w-full cursor-pointer items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-[#009fe0]/[0.12]">
                        <Image src={uploadIconIrl} alt="이미지 업로드" />
                    </div>
                    <p className="px-4 pt-1 text-[1em] text-black">사진 이름1</p>
                    <p className="px-4 pb-4 text-[0.8125em] text-[#848484]">사진에 대한 설명 1</p>
                </Container>
            ),
        },
    ];

    const handleDragStart = (position: number) => {
        setIsDragging(true);
        setStartPosition(position);
    };

    const handleDragMove = (position: number) => {
        if (!isDragging) return;
        setTranslate(position - startPosition);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        if (translate > 50 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1); // 왼쪽으로 이동
        } else if (translate < -50 && currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1); // 오른쪽으로 이동
        }
        setTranslate(0); // 초기화
    };

    return (
        <div
            className="box-border flex w-full gap-[1em] p-4"
            ref={containerRef}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)} // 터치 이벤트
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)} // 터치 이벤트
            onTouchEnd={handleDragEnd} // 터치 이벤트
        >
            {images.map((image) => (
                <div
                    className="flex transition-transform duration-200"
                    style={{
                        transform: `translateX(calc(-${currentIndex * 100}% + ${translate}px))`,
                    }}
                    key={image.id}
                >
                    {image.content}
                </div>
            ))}
        </div>
    );
};

export default ImageUploader;
