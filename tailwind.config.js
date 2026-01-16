tailwind.config = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '24px',
        lg: '32px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1520px',
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #67c0ff 0%, #0075bf 100%)',
      },
      colors: {
        'brand-blue': '#0075bf',
        'brand-black': '#000000',
      },
      boxShadow: {
        'soft': '0px 3px 12px 0px #00000014',
      },
    },
  },
};