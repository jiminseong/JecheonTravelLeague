import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './views/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './widgets/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#8ADF28',
                secondary: '#E1F2CD',
                tertiary: '#FCFFF8',
                black: '#030303',
                grey: '#4D4D4D',
                lightgrey: '#C1C1C1',
                lightgrey2: '#E3E3E3',
            },
        },
    },
    plugins: [],
};
export default config;
