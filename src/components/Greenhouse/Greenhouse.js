import dayImage from './images/greenhouse-day.jpg';
import { useContext, useEffect } from 'react';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { ThemeContext } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  const { themeName, setThemeName } = useContext(ThemeContext)
  let theme
  themeName === 'day' ? theme = dayImage : theme = nightImage;

  useEffect(() => {
    themeName === 'day' ? theme = dayImage : theme = nightImage;
  }, [setThemeName]);

  return (
    <section>
      <img className='greenhouse-img'
        src={theme}
        alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
