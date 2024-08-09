// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   optimizeDeps: {
//     exclude: ['x-date-pickers']
//   }
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Path relatif ke root proyek
    },
  },
  optimizeDeps: {
    exclude: ["x-date-pickers"],
  },
});
