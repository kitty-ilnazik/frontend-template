import { AnimatePresence, motion } from 'framer-motion'

import AppRouter from '@/router/AppRouter'

const AppContainer = () => {
	return (
		<div
			className='min-h-screen transition-colors duration-700 bg-gradient-to-br
      from-gray-100 via-gray-200 to-gray-300
      dark:from-[#050409] dark:via-[#0f1220] dark:to-[#171826]'
		>
			<AnimatePresence mode='wait'>
				<motion.div
					key='main'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<AppRouter />
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default AppContainer
