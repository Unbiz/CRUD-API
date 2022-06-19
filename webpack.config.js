import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const isProduction = process.env.NODE_ENV == 'production';
const __dirname = dirname(fileURLToPath(import.meta.url));


const config = {
    entry: './dist/index.js',
    output: {
        path: resolve(__dirname, 'bundle'),
        filename: 'main.cjs',
    },
    module: {
        rules: [
            {
                test: /\.(ts)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],

            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '...'],
    },
    target: 'node',
};

export default () => {
    if (isProduction) {
        config.mode = 'production';


    } else {
        config.mode = 'development';
    }
    return config;
};
