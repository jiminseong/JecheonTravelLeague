import BottomNavigationBar from '@/widgets/navigation/BottomNavigationBar';
import React from 'react';

interface AIPageProps {}

const AIPage: React.FC<AIPageProps> = ({}) => {
    return (
        <div className="relative h-[100vh] w-full overflow-hidden px-[1em] pb-[15%] pt-[30%]">
            <div className="flex h-full w-full flex-col gap-[1em] overflow-scroll"></div>
            <BottomNavigationBar />
        </div>
    );
};

export default AIPage;
