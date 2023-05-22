export const babelLoader = () => ({
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    'i18next-extract',
                    {
                        locales: ['en', 'ru'],
                        keyAsDefaultValue: true,
                        saveMissing: true,
                        outputPath: 'public/locales/{{locale}}/{{ns}}.json',
                    },
                ],
            ].filter(Boolean),
        },
    },
})
