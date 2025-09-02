import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        gig_drivers: 'gig_drivers.html',
        business_fleet: 'business_fleet.html',
        real_estate: 'real_estate.html',
        personal_car: 'personal_car.html',
      },
    },
  },
})