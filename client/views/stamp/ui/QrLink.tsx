import React from 'react';
import exampleQrImageUrl from '@/public/images/exampleQrImage.png';
import Image from 'next/image';
import Container from '@/widgets/container/Container';

interface QrLinkProps {}

const QrLink: React.FC<QrLinkProps> = ({}) => {
    return (
        <Container className="absolute left-4 top-[8em] z-10 flex h-20 w-20 items-center justify-center">
            <Image src={exampleQrImageUrl} alt="qr예시이미지" width={64} height={64} />
        </Container>
    );
};

export default QrLink;
