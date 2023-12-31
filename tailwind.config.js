/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            any: ["Anybody", "sans-serif"],
        },
        container: {
            padding: "2rem",
            center: true,
        },
        extend: {
            screens: {
                xl: "1140px",
            },
        },
    },
    plugins: [],
};
