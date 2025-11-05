/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        light: {
          bg: '#F7F7F9',
          surface: '#FFFFFF',
          primary: '#0B1220',
          secondary: '#334155',
          muted: '#6B7280',
          border: '#E5E7EB',
          accent: '#0F4C75',
          'accent-hover': '#145A8D',
          success: '#16A34A',
          warning: '#F59E0B',
          error: '#EF4444',
        },
        
        // Dark Mode Colors
        dark: {
          bg: '#0F1724',
          surface: '#0B1220',
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
          muted: '#94A3B8',
          border: '#1E293B',
          accent: '#0F4C75',
          'accent-hover': '#1872A4',
          success: '#22C55E',
          warning: '#FBBF24',
          error: '#F87171',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}