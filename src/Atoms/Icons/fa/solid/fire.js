// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const SvgFasFire = (props) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z" />
  </svg>
)

export const FasFire = withStyle(SvgFasFire, 'FasFire', false)
