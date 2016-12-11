import path from 'path';
import gulp from 'gulp';
import config from '../config';

const glob = {
    styles: path.join(config.css.src, '/**/*.{sass,scss,css}'),
    html: path.join(config.html.src, '/**/*.html'),
    images: path.join(config.images.src, '/**/*.{jpg,png,svg,gif}'),
};

export default function watch() {
    gulp.watch([glob.styles], ['styles']);
    gulp.watch([glob.html], ['html']);
    gulp.watch([glob.images], ['images']);
}
