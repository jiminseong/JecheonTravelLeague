import Image from 'next/image';
import React from 'react';
import crossIconUrl from '@/public/icons/crossIcon.svg';

interface ModalProps {
    onClick?: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClick }) => {
    return (
        <div className="z-5 absolute flex h-full w-full items-center justify-center">
            <div
                style={{ boxShadow: '0px 2px 20px 0 rgba(119,183,45,0.1)' }}
                className="flex justify-center gap-4 rounded-xl bg-jgreen px-4 py-4 text-[1em] font-semibold text-white backdrop-blur-lg"
            >
                준비중인 기능입니다
                <Image className="cursor-pointer" onClick={onClick} src={crossIconUrl} width={15} alt="경고창 닫기" />
            </div>
        </div>
    );
};

export default Modal;
