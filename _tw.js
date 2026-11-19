// Общие токены концепта «Кондитерская» для Tailwind CDN
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#F6EDE3', light: '#FBF6EF', deep: '#EADCCB' },
        wine: { DEFAULT: '#5E0F1F', dark: '#45091A', soft: '#7A1C2E' },
        berry: '#B3263E',
        cocoa: '#2B1A17',
        pistachio: '#9DB07A',
        gold: '#B8955A',
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        hand: ['"Bad Script"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: { to: { transform: 'translateX(-50%)' } },
        spin: { to: { transform: 'rotate(360deg)' } },
        rise: { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'none' } },
        draw: { to: { strokeDashoffset: 0 } },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        spinslow: 'spin 24s linear infinite',
        rise: 'rise .8s cubic-bezier(.2,.7,.2,1) both',
      },
    },
  },
};
