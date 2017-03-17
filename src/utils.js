import moment from 'moment';

export const hexToRgba = (hex, opacity) => {
  const hexNum = hex.replace('#', '');
  const opacityVal = opacity || 1;
  const r = parseInt(hexNum.substring(0, 2), 16);
  const g = parseInt(hexNum.substring(2, 4), 16);
  const b = parseInt(hexNum.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${opacityVal})`;
};

export const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

export const weekNumOfMonth = (dateString) => {
  return Math.ceil(moment(dateString).date() / 7);
};
