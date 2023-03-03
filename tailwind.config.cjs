/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                blink: "blink 500ms step-end infinite alternate",
                "spin-slow": "spin 3s linear infinite",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
