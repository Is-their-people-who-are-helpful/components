// @flow strict
import * as React from 'react'
import { FasTimes } from '../../Atoms/Icons'

type PropsType = {}

const ModalToggler = ({ ...props }: PropsType) => (
  <FasTimes size="28px" {...props} />
)

export default ModalToggler