'use client';
import Button from '@/widgets/button/Button';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import React, { useState } from 'react';
import leftArrow from '@/public/icons/leftArrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LineInput from '@/widgets/input/LineInput';

interface LoginProcessPageProps {}

const LoginProcessPage: React.FC<LoginProcessPageProps> = ({}) => {
    const router = useRouter();
    const [label, setLabel] = useState('다음');
    const questions = [
        '이름을 입력해주세요',
        '나이를 입력해주세요',
        '음식 취향을 입력해주세요',
        '여행 취향을 입력해주세요',
        '아이디를 입력해주세요',
        '비밀번호를 입력해주세요',
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNextClick = () => {
        if (currentQuestionIndex < questions.length - 2) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else if (currentQuestionIndex < questions.length - 1) {
            setLabel('가입 완료');
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            router.push('/home'); // 마지막 질문 후 이동할 경로 설정
        }
    };

    return (
        <PageWrapper paddingX="2em">
            <div className="center h-[80%] w-full flex-col">
                <Image src={leftArrow} alt="왼쪽 뒤로가기" onClick={() => router.push('/login')} />
                <div className="mb-[1em] flex flex-col justify-start gap-[1em]">
                    <p className="mt-[3em] text-[28px] font-bold text-black">{questions[currentQuestionIndex]}</p>
                    <LineInput placeholder="" style="text-[1.25em] font-semibold" />
                </div>
            </div>
            <Button size="medium" variant="primary" onClick={handleNextClick}>
                {label}
            </Button>
        </PageWrapper>
    );
};

export default LoginProcessPage;
