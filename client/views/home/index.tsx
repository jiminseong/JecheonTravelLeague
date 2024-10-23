import BottomNavigationBar from '@/widgets/navigation/BottomNavigationBar';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import React from 'react';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
    return (
        <PageWrapper>
            <BottomNavigationBar />
        </PageWrapper>
    );
};

export default HomePage;
