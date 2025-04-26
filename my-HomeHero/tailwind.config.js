/**@type {import('tailwindcss').config} */

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4A90E2',
                secondary: '#50C878',
            },
        },
    },
    plugins: [],
}
