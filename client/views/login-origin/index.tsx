'use client';
import Button from '@/widgets/button/Button';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import React, { useState } from 'react';
import leftArrow from '@/public/icons/leftArrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LineInput from '@/widgets/input/LineInput';

interface LoginOriginPageProps {}

const LoginOriginPage: React.FC<LoginOriginPageProps> = ({}) => {
    const router = useRouter();

    const questions = [
        '나이를 입력해주세요',
        '음식 취향을 입력해주세요',
        '여행 취향을 입력해주세요',
        '아이디를 입력해주세요',
        '비밀번호를 입력해주세요',
    ];

    const placeholderss = [
        '지민성',
        '24',
        '매운 음식은 안좋아하고, 건강한 음식이..',
        '조용한 곳이 좋고, 산과 계곡을 좋아해요..',
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNextClick = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            router.push('/next-step'); // 마지막 질문 후 이동할 경로 설정
        }
    };

    return (
        <PageWrapper paddingX="2em">
            <div className="center h-[80%] w-full flex-col">
                <Image src={leftArrow} alt="왼쪽 뒤로가기" onClick={() => router.push('/login')} />
                <div className="mb-[1em] flex flex-col justify-start gap-[1em]">
                    <p className="mt-[3em] text-[28px] font-bold text-black">{questions[currentQuestionIndex]}</p>
                    <LineInput placeholder="지민성" style="text-[1.25em] font-semibold" />
                </div>
            </div>
            <Button size="medium" variant="primary" onClick={handleNextClick}>
                다음
            </Button>
        </PageWrapper>
    );
};

export default LoginOriginPage;
