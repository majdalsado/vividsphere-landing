/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sora: ['Sora', 'sans-serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: '#4F46E5',
                secondary: '#06B6D4'
            },
            borderRadius: {
                'xl': '32px'
            },
            backgroundImage: {
                'gradient-text': 'linear-gradient(90deg, #4F46E5, #06B6D4)',
                'hero-gradient': 'linear-gradient(to bottom, rgba(59, 130, 246, 0.1), rgb(249, 250, 251))',
                'primary-gradient': 'linear-gradient(99.86deg, #4F46E5, #06B6D4)'
            }
        }
    }
} 