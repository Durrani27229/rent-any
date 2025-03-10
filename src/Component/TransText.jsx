import React from 'react'
import { useTranslation } from 'react-i18next'
// import { TansTextProps } from '../../types'

function TansText({ text, className }) {
    const { t } = useTranslation()
    return (
        <p className={className}>{t(text)}</p>
    )
}

export default React.memo(TansText);