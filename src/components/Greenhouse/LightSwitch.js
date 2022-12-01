import './LightSwitch.css';
import useTheme, { ThemeContext } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme;

  return (
    <div className="light-switch day">
      <button className="on">DAY</button>
      <button className="off">NIGHT</button>
    </div>
  );
}

export default LightSwitch;
