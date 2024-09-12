import React from 'react';

export interface PageWrapperProps {
    padding?: string;
    children?: React.ReactNode;
}

const PageWrapper = ({ padding = '1em', children, ...props }: PageWrapperProps) => {
    // const wrapperClass = classNames('flex flex-col items-center', {
    //     [`px-${padding}`]: padding, // padding 값을 동적으로 처리
    // });

    return (
        <div
            style={{ padding: `${padding}` }}
            // className={wrapperClass}
            {...props}
        >
            {children}
        </div>
    );
};

export default PageWrapper;
