import { useUpdateTheme } from "../context/ThemeContext";

const Footer = () => {
  const setTheme = useUpdateTheme();// eslint-disable-line

  console.log('footer');

  return (
    <footer>
      <div>フッター</div>
    </footer>
  );
};

export default Footer;
