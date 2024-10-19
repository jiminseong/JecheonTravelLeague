'use client';
import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import Button from '@/widgets/button/Button';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import FirstOnboarding from './ui/FirstOnboarding';
import SecondOnborading from './ui/ThirdOnboarding';
import { useRouter } from 'next/navigation';
import ProgressCircle from './ui/ProgressCircle';
import ThirdOnboarding from './ui/ThirdOnboarding';

const OnboardingPage: React.FC = () => {
    const [page, setPages] = useState(0);
    const [label, setLabel] = useState('다음');
    const router = useRouter();

    const handlePage = () => {
        if (page === 0) {
            setPages(1);
            setLabel('다음');
        } else if (page === 1) {
            setPages(2);
            setLabel('제천메이트와 시작하기');
            // 라우팅 추가
        } else if (page === 2) {
            router.push('/login');
            // 라우팅 추가
        }
    };

    return (
        <PageWrapper paddingX="2em">
            {page === 0 && <FirstOnboarding />}
            {page === 1 && <SecondOnborading />}
            {page === 2 && <ThirdOnboarding />}
            <ProgressCircle page={page} />
            <Button size="medium" variant="primary" onClick={() => handlePage()}>
                {label}
            </Button>
        </PageWrapper>
    );
};

export default OnboardingPage;
