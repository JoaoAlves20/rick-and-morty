import PropTypes from 'prop-types'

import { ButtonStyles, ContainerButton } from './styles'

import advance from '../../assets/icons/advance.svg'
import back from '../../assets/icons/back.svg'

export default function ContainerButtons({
  functionClickIncrease, functionClickDecrease,
}) {
  return (
    <>
      <ContainerButton>
        <ButtonStyles onClick={functionClickDecrease}>
          <img src={back} alt="Back page" />
        </ButtonStyles>
        <ButtonStyles onClick={functionClickIncrease}>
          <img src={advance} alt="Advance page" />
        </ButtonStyles>
      </ContainerButton>
    </>
  )
}

ContainerButtons.propTypes = {
  functionClickDecrease: PropTypes.func.isRequired,
  functionClickIncrease: PropTypes.func.isRequired,
}