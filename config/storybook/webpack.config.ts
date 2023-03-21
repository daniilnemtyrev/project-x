/* eslint-disable no-param-reassign */
import path from 'path'
import webpack, { RuleSetRule } from 'webpack'
import { svgLoader } from '../build/loaders/svgLoader'
import { cssLoader } from '../build/loaders/cssLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '../../src'),
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')
    config.module?.rules?.push(cssLoader(true))

    if (config.module?.rules) {
        config.module.rules = config.module?.rules?.map(
            (rule: RuleSetRule | '...') => {
                if (
                    typeof rule !== 'string' &&
                    /svg/.test(rule.test as string)
                ) {
                    return { ...rule, exclude: /\.svg$/i }
                }

                return rule
            }
        )
    }

    config.plugins?.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(false),
            __API_URL__: JSON.stringify(''),
        })
    )

    config.module?.rules?.push(svgLoader)

    return config
}
