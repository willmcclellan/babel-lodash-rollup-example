import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/4.js',
  format: 'umd',
  moduleName: 'rollupBabelLodash',
  plugins: [
    resolve(),
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
  dest: 'build/bundle-4.js',
}
