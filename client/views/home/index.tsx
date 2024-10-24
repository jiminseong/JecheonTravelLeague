import BottomNavigationBar from '@/widgets/navigation/BottomNavigationBar';
import TopNavigationText from '@/widgets/navigation/TopNavigationText';

import React from 'react';
import MyWallet from './ui/MyWallet';
import JaeChoenDeliciousRestaurant from './ui/JaeChoenDeliciousRestaurant';
import PopularCategory from './ui/PopularCategory';
import FeatureNavigation from './ui/FeatureNavigation';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
    return (
        <div className="relative h-[100vh] w-full overflow-hidden px-[1em] pb-[15%] pt-[35%] md:pt-[25%]">
            <TopNavigationText />
            <div className="flex h-full w-full flex-col gap-[1em] overflow-scroll">
                <MyWallet />
                <PopularCategory />
                <FeatureNavigation />
                <JaeChoenDeliciousRestaurant />
            </div>
            <BottomNavigationBar />
        </div>
    );
};

export default HomePage;
