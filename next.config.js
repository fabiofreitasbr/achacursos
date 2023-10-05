/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return {
            beforeFiles: [
                // if the host is `app.fabiofreitas.com.br`,
                // this rewrite will be applied
                {
                    source: '/:path*',
                    has: [
                        {
                            type: 'host',
                            value: 'links.fabiofreitas.com.br',
                        },
                    ],
                    destination: '/links/:path*',
                },
            ]
        }
    }
}

module.exports = nextConfig
