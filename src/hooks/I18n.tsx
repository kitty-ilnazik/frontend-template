import { useI18n } from '@/providers/I18nProvider'

const useTranslations = (namespace?: string) => {
	const { t } = useI18n()

	return (key: string) => {
		const fullKey = namespace ? `${namespace}.${key}` : key
		return t(fullKey)
	}
}

export default useTranslations
