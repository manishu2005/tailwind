// import { defineConfig } from 'vite';

// export default defineConfig({
//   plugins: [],
// });

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})