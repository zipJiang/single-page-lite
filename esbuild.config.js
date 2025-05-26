import esbuild from 'esbuild';
import fs from 'fs/promises';
import { transformAsync, transformSync } from '@babel/core';

async function build() {

    // Bundle into jsx
    const result = await esbuild.build({
        entryPoints: ['src/index.jsx'],
        bundle: true,
        metafile: true,
        minify: false,
        outdir: "dist",
        format: 'esm',
        allowOverwrite: true,
        external: ['react', 'react-dom', '@mui/material', "@react-spring/web"],
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
            "@mui/material": "https://esm.sh/@mui/material@5.15.15?external=react",
            "@react-spring/web": "https://esm.sh/@react-spring/web@9.7.5"
            }
            }
            </script>
            <script type="module">
                import * as React from "react";
                import * as ReactDOM from "react-dom";

                window.React = React;
                window.ReactDOM = ReactDOM;
            </script>
        </head>
        <body>
            <div hidden id="payload-read">\${payload}</div>
            <div id="root"></div>
            <script type="module">
            ${transpiledCode}
            </script>
            <input name="sanity-check" type="hidden" />
            <div hidden>
            <input type="submit" id="submit" value="Submit" />
            </div>
        </body>
        </html>
        `;

        // Make dir if not exist
        await fs.mkdir('dist', { recursive: true });

        // Write the html file
        await fs.writeFile('dist/index.html', htmlContent);
    }


build().catch((e) => {
    console.error(e);
    process.exit(1);
});
