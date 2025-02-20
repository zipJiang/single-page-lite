import esbuild from 'esbuild';
import fs from 'fs/promises';
import path from 'path';
import babel from 'esbuild-plugin-babel';
import { htmlPlugin } from '@craftamap/esbuild-plugin-html';
import { transformAsync, transformSync } from '@babel/core';
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


async function build() {

    // Bundle into jsx
    const result = await esbuild.build({
        entryPoints: ['src/index.jsx'],
        bundle: true,
        metafile: true,
        minify: false,
        // outdir: "dist",
        format: 'esm',
        allowOverwrite: true,
        external: ['react', 'react-dom', '@mui/material', "@react-spring/web"],
        // plugins: [
        //     babel({
        //         babelHelpers: 'bundled',
        //         plugins: [
        //             '@babel/plugin-transform-template-literals',
        //             "@babel/plugin-syntax-jsx",
        //         ],
        //     })
        // ]
        write: false,
        // outfile: 'dist/index.js',
        });

        const { outputFiles } = result;
        const jsCode = outputFiles[0].text;

        const { code: transpiledCode } = transformSync(jsCode, {
        plugins: ['@babel/plugin-transform-template-literals'],
        });

        const htmlContent = `
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
            "@mui/material": "https://esm.sh/@mui/material@latest?external=react",
            "@react-spring/web": "https://esm.sh/@react-spring/web"
            }
            }
            </script>
        </head>
        <body>
            <div id="root"></div>
            <script type="module">
            ${transpiledCode}
            </script>
        </body>
        </html>
        `;

        await fs.writeFile('dist/index.html', htmlContent);
    }


build().catch((e) => {
    console.error(e);
    process.exit(1);
});