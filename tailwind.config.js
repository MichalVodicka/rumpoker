/** @type {import('tailwindcss').Config}*/
export default  {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      backgroundImage: {
        'page': "url('bg.jpeg)",
      }
    },
  },

  plugins: [],
};
