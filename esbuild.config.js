import esbuild from 'esbuild';
import { htmlPlugin } from '@craftamap/esbuild-plugin-html';
import * as importMap from "esbuild-plugin-import-map";
// import importMapPlugin from 'esbuild-plugin-import-map';

importMap.load({
    imports: {
        "react": "https://esm.sh/react@^18",
        "react-dom": "https://esm.sh/react-dom@^18",
        "react/jsx-runtime": "https://esm.sh/react@^18/jsx-runtime",
        "@mui/material": "https://esm.sh/@mui/material@latest?external=react"
    }
})


esbuild.build({
    entryPoints: ['src/index.jsx'],
    bundle: true,
    metafile: true,
    minify: false,
    outdir: "dist",
    format: 'esm',
    external: ['react', 'react-dom', '@mui/material'],
    plugins: [
        // importMap.load({
        //     imports: {
        //         "react": "https://esm.sh/react@^18",
        //         "react-dom": "https://esm.sh/react-dom@^18",
        //         "react/jsx-runtime": "https://esm.sh/react@^18/jsx-runtime",
        //         "@mui/material": "https://esm.sh/@mui/material@latest?external=react"
        //     }
        // }),
        // importMap.plugin(),
        htmlPlugin({
            files: [
                {
                    entryPoints: ['src/index.jsx'],
                    filename: 'index.html',
                    inline: true,
                    scriptLoading: "module",
                    htmlTemplate: `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <title>Annotation</title>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <!-- Fonts to support Material Design -->
                            <link rel="preconnect" href="https://fonts.googleapis.com" />
                            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                            <link
                                rel="stylesheet"
                                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
                            />
                            <!-- Icons to support Material Design -->
                            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                            <script type="importmap">
                                {
                                    "imports": {
                                        "react": "https://esm.sh/react@^18",
                                        "react-dom": "https://esm.sh/react-dom@^18",
                                        "react/jsx-runtime": "https://esm.sh/react@^18/jsx-runtime",
                                        "@mui/material": "https://esm.sh/@mui/material@latest?external=react"
                                    }
                                }
                            </script>
                        </head>
                        <body>
                            <div id="root"></div>
                        </body>
                        </html>
                    `,
                },
            ],
        })
    ],
}).catch(() => process.exit(1));