//useTheme,changeTheme,setTheme,_theme,label,checked,useContext
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [theme ,setTheme]  = useTheme();
  const THEMES = ['light', 'dark', 'red']

  const changeTheme = (e) => setTheme(e.target.value);

  return (
    <header className={`content-${theme}`}>
      {THEMES.map((_theme)=>{
        return(
            <lable key={_theme}>
              <input
                type="radio"
                value={_theme}
                checked={_theme === theme}
                onChange={changeTheme}
              />
                {_theme}
            </lable>
          )
        })}
    </header>
  );
}

export default Header;

