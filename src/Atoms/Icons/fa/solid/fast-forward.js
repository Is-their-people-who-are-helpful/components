// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFasFastForward = props => <svg viewBox="0 0 512 512" {...props}><path d="M512 76v360c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V284.1L276.5 440.6c-20.6 17.2-52.5 2.8-52.5-24.6V284.1L52.5 440.6C31.9 457.8 0 443.4 0 416V96c0-27.4 31.9-41.7 52.5-24.6L224 226.8V96c0-27.4 31.9-41.7 52.5-24.6L448 226.8V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12z" /></svg>;

export const FasFastForward = withStyle(SvgFasFastForward, "FasFastForward", false);