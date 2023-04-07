import { defineConfig } from 'vitest/config'
import vue from "@vitejs/plugin-vue"
import vuetify from "vite-plugin-vuetify"
import AutoImport from "unplugin-auto-import/vite"


export default defineConfig({
    plugins: [ 
        vue(), 
        vuetify({autoImport: true}), 
        AutoImport({
                imports:["vue"],
            })
            ],
    test: {
        globals: true,
        deps:{
            inline: ["vuetify"]
        },
        environment: "happy-dom",
    }
})
