export default {
  color: 'orange',
  bg: 'white',
};

export const invertTheme = ({ color, bg }) => ({
  color: bg,
  bg: color,
});
