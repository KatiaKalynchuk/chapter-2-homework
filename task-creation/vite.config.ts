import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        react(),
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
