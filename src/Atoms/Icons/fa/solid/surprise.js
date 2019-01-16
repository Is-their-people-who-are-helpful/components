// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFasSurprise = props => <svg viewBox="0 0 496 512" {...props}><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 208c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm112 208c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm80-176c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" /></svg>;

export const FasSurprise = withStyle(SvgFasSurprise, "FasSurprise", false);