import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '.style.module.css'
import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles['container']}>
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className={` ${styles['textinput']} ${projectStyles['input']} `}
      />
    </div>
  )
}

AppComponent.defaultProps = {
  textinput_placeholder: 'Search anything...',
}

AppComponent.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default AppComponent
