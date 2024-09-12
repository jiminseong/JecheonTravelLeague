'use client';
import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import Button from '@/widgets/button/Button';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import FirstOnboarding from './ui/FirstOnboarding';
import SecondOnborading from './ui/SecondOnborading';
import { useRouter } from 'next/navigation';

const OnboardingPage: React.FC = () => {
    const [page, setPages] = useState(0);
    const [label, setLabel] = useState('다음');
    const router = useRouter();

    const handlePage = () => {
        if (page === 0) {
            setPages(1);
            setLabel('제천메이트와 시작하기');
        } else if (page === 1) {
            setPages(0);
            setLabel('다음');
            router.push('/login');
            // 라우팅 추가
        }
    };

    return (
        <PageWrapper paddingX="2em">
            {page === 0 && <FirstOnboarding />}
            {page === 1 && <SecondOnborading />}

            <Button size="medium" variant="primary" onClick={() => handlePage()}>
                {label}
            </Button>
        </PageWrapper>
    );
};

export default OnboardingPage;
