import { hexToRgba } from '../utils';

// general colors

export const success = '#5ACE5C';
export const warn = '#f8b10b';

export const positive = '#5ACE5C';
export const negative = '#B21A1A';
export const neutral = '#3b3838';

// app specific colors

export const main = '#EC6E05';
export const textOnMain = 'white';

export const secondary = '#f2903e';
export const textOnSecondary = 'white';

export const secondaryTransparent = hexToRgba(main, 0.8);
export const textOnSecondaryTransparent = 'white';

export const light = hexToRgba(main, 0.6);
export const appBackground = 'white';
export const favButton = main;

export const text = 'black';
export const subText = '#83858c';

export const award = '#D4AF37';

// GI value related colors

export const lowGi = '#5ACE5C';
export const textOnLowGi = 'white';

export const mediumGi = '#42BFF4';
export const textOnMediumGi = 'white';

export const highGi = '#B21A1A';
export const textOnHighGi = 'white';

export const noGiValue = '#c9cccd';
export const textOnNoGiValue = 'white';
