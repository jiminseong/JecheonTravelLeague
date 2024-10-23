'use client';
import React, { useState, useRef } from 'react';
import Container from '@/widgets/container/Container';

interface JaeChoenDeliciousRestaurantProps {}

const JaeChoenDeliciousRestaurant: React.FC<JaeChoenDeliciousRestaurantProps> = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [translate, setTranslate] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const slides = [
        {
            id: 0,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em] p-[1em]">
                    <div className="h-[80%] rounded-lg bg-lightgrey"></div>
                    <p>위치명</p>
                    <p className="text-xs text-left text-[#848484]">사용자로부터거리m</p>
                </Container>
            ),
        },
        {
            id: 1,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em] p-[1em]">
                    <div className="h-[80%] rounded-lg bg-lightgrey"></div>
                    <p>위치명</p>
                    <p className="text-xs text-left text-[#848484]">사용자로부터거리m</p>
                </Container>
            ),
        },
        {
            id: 2,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em] p-[1em]">
                    <div className="h-[80%] rounded-lg bg-lightgrey"></div>
                    <p>위치명</p>
                    <p className="text-xs text-left text-[#848484]">사용자로부터거리m</p>
                </Container>
            ),
        },
        {
            id: 3,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em] p-[1em]">
                    <div className="h-[80%] rounded-lg bg-lightgrey"></div>
                    <p>위치명</p>
                    <p className="text-xs text-left text-[#848484]">사용자로부터거리m</p>
                </Container>
            ),
        },
        {
            id: 4,
            content: (
                <Container className="flex h-[180px] w-[199px] flex-col gap-[0.25em] p-[1em]">
                    <div className="h-[80%] rounded-lg bg-lightgrey"></div>
                    <p>위치명</p>
                    <p className="text-xs text-left text-[#848484]">사용자로부터거리m</p>
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
        } else if (translate < -50 && currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1); // 오른쪽으로 이동
        }
        setTranslate(0); // 초기화
    };

    return (
        <div className="flex flex-col gap-[0.5em]">
            <p className="text-left text-[1.125em] font-bold text-jgreen">제천 추천 맛집</p>
            <div
                className="flex w-[100%] gap-[1em] overflow-hidden"
                ref={containerRef}
                onMouseDown={(e) => handleDragStart(e.clientX)}
                onMouseMove={(e) => handleDragMove(e.clientX)}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={(e) => handleDragStart(e.touches[0].clientX)} // 터치 이벤트
                onTouchMove={(e) => handleDragMove(e.touches[0].clientX)} // 터치 이벤트
                onTouchEnd={handleDragEnd} // 터치 이벤트
            >
                {slides.map((slide, index) => (
                    <div
                        className="flex transition-transform duration-200"
                        style={{
                            transform: `translateX(calc(-${currentIndex * 100}% + ${translate}px))`,
                        }}
                        key={slide.id}
                    >
                        {slide.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JaeChoenDeliciousRestaurant;
