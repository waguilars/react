import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import hq from 'alias-hq'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    fastRefresh: process.env.NODE_ENV !== 'test'
  })],
  resolve: {
    alias: hq.get('rollup')
  },
});
