export default defineNuxtConfig({
    app: {
        head: {
            script: [
                ...(process.env.PIRSCH_CODE
                    ? [
                        {
                            src: 'https://api.pirsch.io/pirsch.js',
                            id: 'pirschjs',
                            defer: true,
                            'data-code': process.env.PIRSCH_CODE,
                            type: 'text/javascript',
                        },
                    ]
                    : []),
                {
                    src: 'https://static.mailerlite.com/js/w/webforms.min.js?v66d7f04ed8b3a6c6412454f5a8e909ec',
                    async: true,
                    body: true
                }
            ],
        },
    },

    extends: [
        '@bloggrify/core',
        '@bloggrify/epoxia'
    ],

    components: {
        global: true,
        dirs: [
            '~/components',
            '~/components/content'  // This allows components to be used in markdown
        ]
    },
})
