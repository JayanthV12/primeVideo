// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <div className="prime-container">
      <div className="prime-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime"
        />
        <div>
          <h1 className="heading">Action Movies</h1>
          <div className="slides">
            <MoviesSlider movies={actionMovies} />
          </div>
        </div>
        <div>
          <h1 className="heading">Comedy Movies</h1>
          <div className="slides">
            <MoviesSlider movies={comedyMovies} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
