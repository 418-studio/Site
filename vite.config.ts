import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: '0.0.0.0', // Permet d'accéder depuis le conteneur
		watch: {
			usePolling: true, // Force la détection via polling (Docker + Windows/macOS)
			interval: 300, // Vérifie les changements toutes les 300 ms
		},
	},
})
