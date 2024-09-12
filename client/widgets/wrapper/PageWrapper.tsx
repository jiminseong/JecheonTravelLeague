import React from 'react';

interface Props {
    paddingX?: string; // 좌우 패딩을 위한 새로운 props
    children: React.ReactNode;
}

const PageWrapper = ({ paddingX = '16px', children, ...props }: Props) => {
    return (
        <div
            className="flex h-[100vh] flex-col items-center justify-evenly gap-4"
            style={{ paddingLeft: paddingX, paddingRight: paddingX }} // 좌우 패딩만 적용
            {...props}
        >
            {children}
        </div>
    );
};

export default PageWrapper;
