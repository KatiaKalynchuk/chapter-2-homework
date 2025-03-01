import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        TanStackRouterVite(),
        react(),
        federation({
            name: 'host-app',
            remotes: {
                auth: "http://localhost:3001/assets/authRemoteEntry.js",
                taskEditor: "http://localhost:3002/assets/taskEditorRemoteEntry.js",
                angularApp: {
                    external: "http://localhost:4201/remoteEntry.js",
                    externalType: 'url',
                    format: 'var',
                }
            },
            shared: ['react', 'react-dom']
        }),
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
        rollupOptions: {
            external: ['angularApp/AppComponent']
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
