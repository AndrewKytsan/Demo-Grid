import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

let ctx = await esbuild.context({
	entryNames: '[name]',
	entryPoints: ['src/main.scss'],
	sourcemap: IS_DEVELOPMENT ? 'inline' : false,
	outdir: 'assets',
	target: 'es2017',
	bundle: true,
	minify: true,
	plugins: [
		sassPlugin({
			async transform(source) {
				const { css } = await postcss([autoprefixer]).process(source, { from: undefined });
				return css;
			},
		}),
	],
});

await ctx.rebuild();

if (IS_DEVELOPMENT) {
	await ctx.watch();
	console.log('WATHING FOR FILE CHANGES!!!');
} else {
	await ctx.dispose();
	console.log('BUILD COMPLETE!!!');
}
