/**@type {import('tailwindcss').config} */

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2563EB',
                secondary: '#16A34A',
            },
        },
    },
    plugins: [],
}
