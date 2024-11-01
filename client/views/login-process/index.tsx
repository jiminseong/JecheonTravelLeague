'use client';
import Button from '@/widgets/button/Button';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import React, { useState, ChangeEvent } from 'react';
import leftArrow from '@/public/icons/leftArrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LineInput from '@/widgets/input/LineInput';
import { useAtom } from 'jotai';
import { signupAtom } from '@/app/atoms/signupState';

interface LoginProcessPageProps {}

const LoginProcessPage: React.FC<LoginProcessPageProps> = ({}) => {
    const router = useRouter();
    const [label, setLabel] = useState('다음');
    const [signupData, setSignupData] = useAtom(signupAtom);

    const questions = [
        '이름을 입력해주세요',
        '나이를 입력해주세요',
        '음식 취향을 입력해주세요',
        '여행 취향을 입력해주세요',
        '아이디를 입력해주세요',
        '비밀번호를 입력해주세요',
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentInput, setCurrentInput] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentInput(e.target.value);
    };

    const handleNextClick = () => {
        const updateSignupData = () => {
            switch (currentQuestionIndex) {
                case 0:
                    setSignupData((prev) => ({ ...prev, name: currentInput }));
                    break;
                case 1:
                    setSignupData((prev) => ({ ...prev, age: currentInput }));
                    break;
                case 2:
                    setSignupData((prev) => ({ ...prev, foodPreference: currentInput }));
                    break;
                case 3:
                    setSignupData((prev) => ({ ...prev, travelPreference: currentInput }));
                    break;
                case 4:
                    setSignupData((prev) => ({ ...prev, username: currentInput }));
                    break;
                case 5:
                    setSignupData((prev) => ({ ...prev, password: currentInput }));
                    break;
            }
        };

        updateSignupData();

        if (currentQuestionIndex < questions.length - 2) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentInput('');
        } else if (currentQuestionIndex < questions.length - 1) {
            setLabel('가입 완료');
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentInput('');
        } else {
            console.log('Final Signup Data:', signupData);
            router.push('/home');
        }
    };

    return (
        <PageWrapper paddingX="2em">
            <div className="center h-[80%] w-full flex-col">
                <Image src={leftArrow} alt="왼쪽 뒤로가기" onClick={() => router.push('/login')} />
                <div className="mb-[1em] flex flex-col justify-start gap-[1em]">
                    <p className="mt-[3em] text-[28px] font-bold text-black">{questions[currentQuestionIndex]}</p>
                    <LineInput
                        placeholder=""
                        style="text-[1.25em] font-semibold"
                        value={currentInput}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <Button size="medium" variant="primary" onClick={handleNextClick}>
                {label}
            </Button>
        </PageWrapper>
    );
};

export default LoginProcessPage;
