import Container from '@/widgets/container/Container';
import React from 'react';

interface FeatureNavigationProps {}

const FeatureNavigation: React.FC<FeatureNavigationProps> = ({}) => {
    return (
        <div className="flex h-[100%] w-[100%] gap-[1em]">
            <Container className="h-[150px] w-[100%]"></Container>
            <Container className="h-[150px] w-[100%]"></Container>
            <Container className="h-[150px] w-[100%]"></Container>
        </div>
    );
};

export default FeatureNavigation;
