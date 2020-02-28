/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {

    theme: {
        extend: {
            spacing: {
                '70': '20rem',
                'sidebar': '18rem'
            },
            colors: {
                sidebar_color: '#414149',
                search: '#F9F7F7'
            },
        }
    },
    variants: {},
    plugins: []
}