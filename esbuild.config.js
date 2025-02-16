import esbuild from 'esbuild';
// const { htmlPlugin }  = require('@craftamap/esbuild-plugin-html');
import { htmlPlugin } from '@craftamap/esbuild-plugin-html';

esbuild.build({
    entryPoints: ['src/index.jsx'],
    bundle: true,
    // outfile: 'dist/bundle.js',
    metafile: true,
    outdir: "dist",
    external: ['react', 'react-dom'],
    plugins: [
        {
            name: 'cdn-react',
            setup(build) {
                build.onResolve({ filter: /^react$/ }, () => ({
                    path: "https://unpkg.com/react@18/umd/react.development.js",
                    namespace: 'cdn',
                }));

                build.onResolve({ filter: /^react-dom$/ }, () => ({
                    path: "https://unpkg.com/react-dom@18/umd/react-dom.development.js",
                    namespace: 'cdn',
                }));

                build.onLoad({ filter: /.*/, namespace: 'cdn' }, async (args) => {
                    const response = await fetch(args.path);
                    const contents = await response.text();
                    return { contents, loader: 'js' };
                });
            },
        },
        htmlPlugin({
            files: [
                {
                    entryPoints: ['src/index.jsx'],
                    filename: 'index.html',
                    inline: true,
                    htmlTemplate: `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
                            <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
                            <title>Document</title>
                        </head>
                        <body>
                            <div id="root"></div>
                            </div>
                        </body>
                        </html>
                    `,
                },
            ],
        })
    ],
}).catch(() => process.exit(1));