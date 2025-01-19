/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {backgroundImage: {
      'custom-gradient': 'linear-gradient(to right, #FFA229 10%, #1C4670 60%)',
    },},
  },
  plugins: [],
};
