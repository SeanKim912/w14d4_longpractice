import './LightSwitch.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useContext(ThemeContext);


  return (
    <div className="light-switch day">
      <button type='button' className="on" onClick={() => setThemeName('day')}>DAY</button>
      <button type='button' className="off" onClick={() => setThemeName('night')}>NIGHT</button>
    </div>
  );
}

export default LightSwitch;
