import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/1.js',
  format: 'umd',
  moduleName: 'rollupBabelLodash',
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: [
        [
          "es2015",
          {
            modules: false
          }
        ]
      ],
    })
  ],
  dest: 'build/bundle-1.js',
}
