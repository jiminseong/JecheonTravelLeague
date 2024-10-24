import React from 'react';

interface ConversaitionProps {}

const Conversaition: React.FC<ConversaitionProps> = ({}) => {
    return (
        <div>
            <div className="flex gap-[1em]">
                <div className="h-[21px] w-[3px] bg-[#8adf28]/50"></div>
                <p className="text-lg text-left font-semibold text-[#4a6f1e]">
                    안녕하세요, 제천 여행 도우미 제천 메이트입니다!
                </p>
            </div>
            <div className="flex gap-[1em]">
                <div className="h-[21px] w-[3px] bg-[#8adf28]/50"></div>
                <p className="text-lg text-left font-semibold text-[#4a6f1e]">
                    제천에 대해 궁금한 걸 모두 말씀해주세요!
                </p>
            </div>

            {/* 여기서부터 대화창 */}
            <div className="mt-[1em]">
                <div className="flex flex-row-reverse gap-[1em]">
                    <div className="h-[21px] w-[3px] bg-[#8adf28]/50"></div>
                    <p className="text-lg text-left font-semibold text-black">
                        제천에 대해 궁금한 걸 모두 말씀해주세요!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Conversaition;
