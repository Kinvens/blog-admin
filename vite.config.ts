import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      //   '@views/*': './src/views/*',
      //   '@components/*': './src/components/*',
      //   '@utils/*': './src/utils/*',
      //   '@hooks/*': './src/hooks/*',
      //   '@stores/*': './src/stores/*',
      //   '@routes/*': './src/routes/*',
      //   '@assets/*': './src/assets/*',
      //   '@layout/*': './src/layout/*',
      //   '@services/*': './src/services/*',
      //   '@config/*': './src/config/*',
    },
  },
})
