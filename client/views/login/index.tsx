import Button from '@/widgets/button/Button';
import Input from '@/widgets/input/Input';
import Logo from '@/widgets/logo/Logo';
import PageWrapper from '@/widgets/wrapper/PageWrapper';
import React from 'react';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
    return (
        <PageWrapper paddingX="2em">
            <div className="w-full">
                <div className="flex h-[80%] flex-col items-center justify-center gap-4">
                    <Logo size="large" />
                    <div className="mt-10 text-3xl font-semibold">제천메이트</div>
                    <div className="text-sm text-gray-800">로그인 후 제천 여행을 함께 해요!</div>
                </div>

                <div className="flex h-full w-full flex-col items-center gap-5">
                    <Input size="full" placeholder="아이디를 입력해주세요" />
                    <Input size="full" placeholder="비밀번호를 입력해주세요" />
                    <Button size="medium" variant="primary">
                        로그인
                    </Button>
                </div>
            </div>
        </PageWrapper>
    );
};

export default LoginPage;
