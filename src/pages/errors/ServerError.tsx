import useTranslations from '@/hooks/I18n'

interface ServerErrorPageProps {
	errorCode?: number
}

const ServerError = ({ errorCode = 500 }: ServerErrorPageProps) => {
	const tErrors = useTranslations('app.errors.server')
	const tButton = useTranslations('app.common.button')

	const getErrorDescription = () => {
		switch (errorCode) {
			case 500:
				return tErrors('descriptions.500')
			case 502:
				return tErrors('descriptions.502')
			case 503:
				return tErrors('descriptions.503')
			case 504:
				return tErrors('descriptions.504')
			default:
				return tErrors('descriptions.default')
		}
	}

	return (
		<div>
			<h1>ServerError</h1>
		</div>
	)
}

export default ServerError
