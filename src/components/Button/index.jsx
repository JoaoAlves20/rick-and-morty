import PropTypes from 'prop-types'

export default function Button({
  functionClick, imageSrc, imageAlt
}) {
  return (
    <>
      <button onClick={functionClick}>
        <img src={imageSrc} alt={imageAlt} />
      </button>
    </>
  )
}

Button.propTypes = {
  functionClick: PropTypes.func.isRequired,
  imageSrc: PropTypes.node.isRequired,
  imageAlt: PropTypes.string.isRequired,
}