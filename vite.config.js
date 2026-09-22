import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: `${root}/index.html`,
        robotique: `${root}/project-robotiquevf.html`,
        cloudvision: `${root}/project-cloudvisionf.html`,
        iotMqtt: `${root}/project-iot-mqtt.html`
      }
    }
  }
});