import Button from '@/widgets/button/Button';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import React from 'react';

interface OnboardingPageProps {}

const OnboardingPage: React.FC<OnboardingPageProps> = ({}) => {
    return (
        <PageWrapper padding="16">
            <Button size="full" variant="primary">
                다음
            </Button>
        </PageWrapper>
    );
};

export default OnboardingPage;
