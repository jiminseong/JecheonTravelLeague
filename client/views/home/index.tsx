import BottomNavigationBar from '@/widgets/navigation/BottomNavigationBar';
import TopNavigationText from '@/widgets/navigation/TopNavigationText';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import React from 'react';
import MyWallet from './ui/MyWallet';
import JaeChoenDeliciousRestaurant from './ui/JaeChoenDeliciousRestaurant';
import PopularCategory from './ui/PopularCategory';
import FeatureNavigation from './ui/FeatureNavigation';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
    return (
        <div className="relative h-[100vh] w-full overflow-hidden px-[1em] pb-[15%] pt-[30%]">
            <TopNavigationText />
            <div className="flex h-full w-full flex-col gap-[1em] overflow-scroll">
                <MyWallet />
                <JaeChoenDeliciousRestaurant />
                <PopularCategory />
                <FeatureNavigation />
            </div>
            <BottomNavigationBar />
        </div>
    );
};

export default HomePage;
