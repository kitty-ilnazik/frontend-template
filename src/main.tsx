import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { I18nProvider } from '@/providers/I18nProvider'
import { QueryProvider } from '@/providers/QueryProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'

import App from './App'
import './index.css'

const RootComponent = () => {
	return (
		<StrictMode>
			<ThemeProvider>
				<I18nProvider>
					<QueryProvider>
						<App />
					</QueryProvider>
				</I18nProvider>
			</ThemeProvider>
		</StrictMode>
	)
}

createRoot(document.getElementById('root')!).render(<RootComponent />)
