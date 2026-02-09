import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Rose (Warmth, relationships, emotion)
        primary: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48', // Main brand color
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        
        // Accent - Indigo (Intelligence without coldness)
        accent: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5', // Accent color
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        
        // Success - Emerald (Trust, security, growth)
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669', // Trust indicators
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        
        // Neutral - Enhanced grays
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 64px
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 56px
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],      // 48px
        'h2': ['2.25rem', { lineHeight: '1.2' }],                            // 36px
        'h3': ['1.5rem', { lineHeight: '1.3' }],                             // 24px
        'h4': ['1.25rem', { lineHeight: '1.4' }],                            // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],                      // 18px
        'body': ['1rem', { lineHeight: '1.6' }],                             // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],                      // 14px
        'caption': ['0.75rem', { lineHeight: '1.4' }],                       // 12px
      },
      
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
      },
      
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 50px -10px rgba(0, 0, 0, 0.15), 0 20px 60px -10px rgba(0, 0, 0, 0.08)',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'warm-gradient': 'linear-gradient(135deg, #fff1f2 0%, #ffffff 50%, #eef2ff 100%)',
        'brand-gradient': 'linear-gradient(135deg, #e11d48 0%, #4f46e5 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
