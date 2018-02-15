import gulp from 'gulp'
import sass from 'gulp-sass'

gulp.task('sass', () => {
  return gulp.src('./src/App.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./src'))
})

gulp.task('default', ['sass'], () => {
  gulp.watch('./src/_styles/*.scss', ['sass'])
  gulp.watch('./src/*.scss', ['sass'])
})
