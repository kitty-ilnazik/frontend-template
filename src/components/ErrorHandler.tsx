import { AnimatePresence, motion } from 'framer-motion'

import { AxiosError } from 'axios'

import ServerError from '@/pages/errors/ServerError'

export type ApiError = AxiosError

interface ErrorHandlerProps {
	error: ApiError
}

const ErrorHandler = ({ error }: ErrorHandlerProps) => {
	return (
		<div
			className='min-h-screen bg-gradient-to-br
      from-gray-100 via-gray-200 to-gray-300
      dark:from-[#050409] dark:via-[#0f1220] dark:to-[#171826]'
		>
			<AnimatePresence mode='wait'>
				<motion.div
					key='error'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<ServerError errorCode={error?.response?.status} />
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default ErrorHandler
