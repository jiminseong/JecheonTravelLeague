import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './ClientLayOut';
import RecoilProvider from './provider/RecoilProvider';
import { Pretendard } from './fonts/font';

export const metadata: Metadata = {
    title: 'Jecheon Travel League',
    description: 'helper to travel Jecheon',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>
            <body className={Pretendard.className}>
                <RecoilProvider>
                    <ClientLayout>{children}</ClientLayout>
                </RecoilProvider>
            </body>
        </html>
    );
}
