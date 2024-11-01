'use client';
import React from 'react';
// import { useRecoilValue, useResetRecoilState } from 'recoil';
// import { authDataState } from '@/entities/auth/model';
// import Header from '@/widgets/header/Header';
// import { deleteCookie } from 'cookies-next';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // const authData = useRecoilValue(authDataState);
    // const resetAuthData = useResetRecoilState(authDataState);
    // const email = authData?.email;
    // const [user, setUser] = useState<{ email?: string } | null>(null);

    // useEffect(() => {
    //     if (authData) {
    //         setUser({ email: authData.email });
    //     } else {
    //         setUser(null);
    //     }
    // }, [authData]);

    // const onLogout = () => {
    //     deleteCookie('accessToken');
    //     resetAuthData();
    // };

    return (
        <div className="bg-jbackground inset-0 z-[210] mx-auto h-full w-full min-w-[320px] max-w-[var(--max-width)]">
            {/* <Header user={user!} onLogout={onLogout} /> */}
            {children}
        </div>
    );
};

export default ClientLayout;
