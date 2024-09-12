// import Image from 'next/image';
// import React from 'react';

// export interface InputProps {
//     border?: boolean;
//     size?: 'medium' | 'large';
//     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
//     backgroundColor?: string;
//     placeholder?: string;
//     icon?: string;
//     lowround?: boolean;
//     type?: string;
//     value?: string;
// }

// export const Input = ({ size = 'medium', placeholder = '', icon = '', type = '', ...props }: InputProps) => {
//     return (
//         <InputWrapper>
//             <StyledInput size={size} placeholder={placeholder} type={type} {...props}></StyledInput>
//             {icon && <Icon width={16} height={16} src={icon} alt="icon" />}
//         </InputWrapper>
//     );
// };

// const InputWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     position: relative;
// `;

// const Icon = styled(Image)`
//     position: absolute;
//     right: 10px;
// `;

// const StyledInput = styled.input<{
//     border?: boolean;
//     size: 'medium' | 'large';
//     primary?: boolean;
//     backgroundColor?: string;
//     lowround?: boolean;
// }>`
//     border: ${({ border }) => (border ? 'solid 1px #EDEDED' : 'none')};
//     border-radius: ${({ lowround }) => (lowround ? '0.5em' : '12px')};
//     box-sizing: border-box;
//     background-color: ${({ backgroundColor }) => backgroundColor || '#F9F9F9'};
//     color: #000000;
//     padding: 0.55em 2.55em 0.55em 0.55em; // 왼쪽 패딩 조정
//     font-size: 0.8125em;
//     font-weight: 400;
//     font-family: 'Pretendard';
//     outline: none;
//     width: ${({ size }) => {
//         switch (size) {
//             case 'medium':
//                 return '200px';
//             case 'large':
//                 return '100%';
//             default:
//                 return '200px';
//         }
//     }};
//     &::placeholder {
//         color: #a6a6a6;
//     }
//     @media (max-width: 768px) {
//         font-size: ${({ size }) => (size === 'medium' ? '0.7em' : '0.75em')};
//     }
// `;

// export default Input;
