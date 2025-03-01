import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'taskEditor',
            filename: 'taskEditorRemoteEntry.js',
            exposes: {
                './TaskEditor': './src/App.tsx'
            },
            shared: ['react', 'react-dom']
        })
    ],
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'firebase/app': path.resolve(__dirname, './node_modules/firebase/app'),
            'firebase/firestore': path.resolve(__dirname, './node_modules/firebase/firestore'),
        },
    },
    optimizeDeps: {
        include: ['firebase/app', 'firebase/firestore'],
    },
});
