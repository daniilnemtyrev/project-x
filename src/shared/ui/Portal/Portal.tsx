import { ReactNode, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { createContainerAndAppendToBody } from './createWrapperAndAppendToBody'

interface PortalProps {
    children: ReactNode
    containerId?: string
}

export function Portal(props: PortalProps) {
    const { children, containerId = 'portal-container' } = props

    const [container, setContainer] = useState<HTMLElement | null>(null)

    useLayoutEffect(() => {
        let element = document.getElementById(containerId)
        let systemCreated = false

        if (!element) {
            systemCreated = true
            element = createContainerAndAppendToBody(containerId)
        }
        setContainer(element)

        return () => {
            if (systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element)
            }
        }
    }, [containerId])

    if (container === null) return null

    return createPortal(children, container)
}
