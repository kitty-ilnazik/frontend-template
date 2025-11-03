import clsx from 'clsx'
import { motion } from 'framer-motion'

type SpinnerProps = {
	type?: 'filled' | 'transparent'
	spin?: boolean
	size?: number
	thickness?: number
	progress?: number
	className?: string
}

const LoadingSpinner = ({
	type = 'filled',
	spin = true,
	size = 48,
	thickness = 6,
	progress = 90,
	className,
}: SpinnerProps) => {
	const clampedProgress = Math.max(0, Math.min(progress, 100))

	const radius = (size - thickness) / 2
	const circumference = 2 * Math.PI * radius
	const offset = circumference * (1 - clampedProgress / 100)

	return (
		<div className='fixed inset-0 flex items-center justify-center'>
			<motion.div
				className='flex flex-col items-center gap-2'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<motion.svg
					width={size}
					height={size}
					animate={spin ? { rotate: 360 } : {}}
					transition={
						spin ? { repeat: Infinity, duration: 1, ease: 'linear' } : {}
					}
					className={clsx('block', className)}
				>
					<circle
						cx={size / 2}
						cy={size / 2}
						r={radius}
						stroke={type === 'transparent' ? 'currentColor' : 'transparent'}
						strokeOpacity={type === 'transparent' ? 0.25 : 0}
						strokeWidth={thickness}
						fill='none'
					/>

					{/* Прогресс */}
					<circle
						cx={size / 2}
						cy={size / 2}
						r={radius}
						stroke='currentColor'
						strokeWidth={thickness}
						strokeLinecap='round'
						strokeDasharray={circumference}
						strokeDashoffset={offset}
						fill='none'
						style={{ transition: 'stroke-dashoffset 0.3s ease' }}
					/>
				</motion.svg>
			</motion.div>
		</div>
	)
}

export default LoadingSpinner
