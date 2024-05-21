/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#7bb1ff",
                secondary: "#FE6B68",
                dark: "#181818",
            },
            backgroundImage: {
                "sign-up":
                    "url('https://images.hdqwalls.com/download/honkai-star-rail-wy-1280x2120.jpg')",
                "sign-in":
                    "url('https://upload-os-bbs.hoyolab.com/upload/2023/01/01/130460543/a8e1e60398495dbe3fabaedd149796cf_1779111657050996363.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80')",
                "home-hsr":
                    "url('https://fastcdn.hoyoverse.com/content-v2/plat/114197/dc5c74f9ce789c9e941ef68479ac7e7c_3672605405893461849.jpg')",
                "home-genshin":
                    "url('https://fastcdn.hoyoverse.com/content-v2/plat/101527/396d1a18610cafbaf6096dc94b89d5a9_6011846117257137829.jpeg')",
            },
        },
    },
    plugins: [],
};
