/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
    extend: {
        colors: {
            "joker-purple": "#6B46C1",
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
    },
};
export const plugins = [];
