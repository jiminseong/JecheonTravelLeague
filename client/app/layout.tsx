import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ClientLayout from './ClientLayOut';
import RecoilProvider from './provider/RecoilProvider';

//이후 폰트 변경
const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

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
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <RecoilProvider>
                    <ClientLayout>{children}</ClientLayout>
                </RecoilProvider>
            </body>
        </html>
    );
}
