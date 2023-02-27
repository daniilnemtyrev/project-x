export function createContainerAndAppendToBody(containerId: string) {
    const containerElement = document.createElement('div')
    containerElement.setAttribute('id', containerId)
    document.body.appendChild(containerElement)
    return containerElement
}
