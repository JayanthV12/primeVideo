// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie
  return (
    <div>
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#ffffff" />
            </button>
            <ReactPlayer url={videoUrl} />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
