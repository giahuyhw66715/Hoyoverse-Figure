/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Inter", "sans-serif"],
            },
            colors: {
                primary: "#7bb1ff",
                secondary: "#FE6B68",
                skyBlue: "#4D6EFF",
                dark: "#181818",
            },
            backgroundImage: {
                banner: "",
            },
        },
    },
    plugins: [],
};
