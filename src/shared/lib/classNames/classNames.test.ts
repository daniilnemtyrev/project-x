import { classNames } from './classNames'

describe('classNames', () => {
    test('only with first param', () => {
        expect(classNames('cls1')).toBe('cls1')
    })

    test('with first and additional params', () => {
        expect(classNames('cls1', {}, ['cls4', 'cls5'])).toBe('cls1 cls4 cls5')
    })

    test('with mods params - check false', () => {
        expect(classNames('cls1', { cls2: true, cls3: false }, [''])).toBe(
            'cls1 cls2'
        )
    })

    test('with mods params - check undefined, additional params', () => {
        expect(
            classNames('cls1', { cls2: true, cls3: undefined }, ['cls4'])
        ).toBe('cls1 cls4 cls2')
    })

    test('with first and additional params', () => {
        expect(classNames('cls1', { cls3: false }, ['cls4', 'cls5'])).toBe(
            'cls1 cls4 cls5'
        )
    })
})
