//useUpdateTheme,setTheme, useUpdateTheme

import { useThemeUpdate } from "../context/ThemeContext"

const Footer = () => {
  const setTheme = useThemeUpdate; //eslint-disable-line
  return (
    <footer>
      <div>フッター</div>
    </footer>
  );
};

export default Footer;
