import webpack from 'webpack'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { cssLoader } from './loaders/cssLoader'
import { svgLoader } from './loaders/svgLoader'
import { babelLoader } from './loaders/babelLoader'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: require.resolve('ts-loader'),
                options: {
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(
                            Boolean
                        ),
                    }),
                    transpileOnly: isDev,
                },
            },
        ],
        exclude: /node_modules/,
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    return [
        babelLoader(),
        typescriptLoader,
        cssLoader(isDev),
        svgLoader,
        fileLoader,
    ]
}
