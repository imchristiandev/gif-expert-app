import { LazyLoadImage } from 'react-lazy-load-image-component'
import PropTypes from 'prop-types'
import 'react-lazy-load-image-component/src/effects/blur.css';

export const GifItem = ( { title, url } ) => {
  return (
    <div className='card'>
      <LazyLoadImage
        alt={title}
        src={url} // use normal <img> attributes as props
        effect="blur"
      />
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
