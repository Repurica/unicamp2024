import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import basicSsl from "@vitejs/plugin-basic-ssl";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), basicSsl()],
  server: {
    host: "0.0.0.0",
    https: true, // Enable HTTPS
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // publicPath: process.env.NODE_ENV === "production" ? "/unicamp2024/" : "/",
  publicPath: "/unicamp2024/",

});
