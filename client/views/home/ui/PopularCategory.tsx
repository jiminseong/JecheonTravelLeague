'use client';
import React, { useState, useRef } from 'react';
import Container from '@/widgets/container/Container';

interface PopularCategoryProps {}

const PopularCategory: React.FC<PopularCategoryProps> = ({}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isDragging = useRef(false);
    const startPosition = useRef(0);
    const translate = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const categories = [
        {
            id: 0,
            content: (
                <div className="flex h-[88px] w-[64px] flex-col items-center justify-center gap-[0.25em]">
                    <Container className="h-[100%] w-[100%]"></Container>
                    <p>위치명</p>
                </div>
            ),
        },
        {
            id: 1,
            content: (
                <div className="flex h-[88px] w-[64px] flex-col items-center justify-center gap-[0.25em]">
                    <Container className="h-[100%] w-[100%]"></Container>
                    <p>위치명</p>
                </div>
            ),
        },
        {
            id: 2,
            content: (
                <div className="flex h-[88px] w-[64px] flex-col items-center justify-center gap-[0.25em]">
                    <Container className="h-[100%] w-[100%]"></Container>
                    <p>위치명</p>
                </div>
            ),
        },
        {
            id: 3,
            content: (
                <div className="flex h-[88px] w-[64px] flex-col items-center justify-center gap-[0.25em]">
                    <Container className="h-[100%] w-[100%]"></Container>
                    <p>위치명</p>
                </div>
            ),
        },
        {
            id: 4,
            content: (
                <div className="flex h-[88px] w-[64px] flex-col items-center justify-center gap-[0.25em]">
                    <Container className="h-[100%] w-[100%]"></Container>
                    <p>위치명</p>
                </div>
            ),
        },
        {
            id: 5,
            content: (
                <div className="flex h-[88px] w-[64px] flex-col items-center justify-center gap-[0.25em]">
                    <Container className="h-[100%] w-[100%]"></Container>
                    <p>위치명</p>
                </div>
            ),
        },
        {
            id: 6,
            content: (
                <div className="flex h-[88px] w-[64px] flex-col items-center justify-center gap-[0.25em]">
                    <Container className="h-[100%] w-[100%]"></Container>
                    <p>위치명</p>
                </div>
            ),
        },
    ];

    const handleDragStart = (position: number) => {
        isDragging.current = true;
        startPosition.current = position;
    };

    const handleDragMove = (position: number) => {
        if (!isDragging.current) return;
        translate.current = position - startPosition.current;
    };

    const handleDragEnd = () => {
        isDragging.current = false;
        if (translate.current > 50 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1); // 왼쪽으로 이동
        } else if (translate.current < -50 && currentIndex < categories.length - 1) {
            setCurrentIndex(currentIndex + 1); // 오른쪽으로 이동
        }
        translate.current = 0; // 초기화
    };

    return (
        <div className="flex flex-col gap-[0.5em]">
            <p className="text-left text-[1.125em] font-bold text-jblue">인기 카테고리</p>
            <div
                className="flex w-[100%] gap-[1em] overflow-hidden"
                ref={containerRef}
                onMouseDown={(e) => handleDragStart(e.clientX)}
                onMouseMove={(e) => handleDragMove(e.clientX)}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
                onTouchEnd={handleDragEnd}
            >
                {categories.map((category, index) => (
                    <div
                        className="flex transition-transform duration-200"
                        style={{
                            transform: `translateX(calc(-${currentIndex * 100}% + ${translate.current}px))`,
                        }}
                        key={category.id}
                    >
                        {category.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCategory;
