import {useContext, useState} from "react";
import ReactSlider from "react-slider";
import './Thermometer.css';
import {ClimateContext} from '../../context/ClimateContext';

function Thermometer() {
  const { temperature, setTemperature } = useContext(ClimateContext);
  // const [val, setVal] = useState(temperature);
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={temperature}
        // onChange={(val) => {setVal(val)}}
        onAfterChange={(e, state) => {console.log(e, state)}}
        // onAfterChange={(e) => {setTemperature(e.target.value)}}

        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}>{}</div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
