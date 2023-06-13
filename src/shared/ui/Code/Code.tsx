import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/Button'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'
import cls from './Code.module.scss'

interface CodeProps {
    className?: string
    text: string
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                variant={ButtonVariants.CLEAR}
                size={ButtonSizes.S}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    )
})