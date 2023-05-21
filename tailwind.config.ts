/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        // colors: {
        //     'bottom-nav': '#010101',
        //     'bottom-nav-active': '#07c160'
        // },
        extend: {
            colors: {
                'bottom-nav': '#010101',
                'bottom-nav-active': '#07c160'
            },
        }
    },
    plugins: []
}
