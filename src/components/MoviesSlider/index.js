// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movies} = props
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    dots: false,
  }
  return (
    <Slider {...settings}>
      {movies.map(each => (
        <MovieItem movie={each} key={each.categoryId} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
