import React, { useState } from 'react';
import './ThemeFormatter.scss';


function ThemeFormatter() {
  const [hue, setHue] = useState(266);
  const [saturation, setSaturation] = useState(60);
  const [lightness, setLightness] = useState(41);

  const hueHandler = event => {
    document.getElementsByTagName('html')[0].style.setProperty("--primary-hue", event.target.value);
    setHue(event.target.value);
  }
  const saturationHandler = event => {
    document.getElementsByTagName('html')[0].style.setProperty("--primary-saturation", event.target.value+"%");
    setSaturation(event.target.value);
  }
  const lightnessHandler = event => {
    document.getElementsByTagName('html')[0].style.setProperty("--primary-lightness", event.target.value+"%");
    setLightness(event.target.value);
  }

  return <>
  <div className="ThemeFormatter">
    <div className="input-group">
      <div className="group-header">
        Primary Color:
      </div>
      <div className="input-pair">
        <label for="hue">Hue (between 0 and 359):
        </label>
        <input type="range" name="hue" min="0" max="359" onChange={ e => hueHandler(e) } />
      </div>
      <div className="input-pair">
          <label for="saturation">Saturation (between 0 and 100):
        </label>
        <input type="range" name="saturation" min="0" max="100" onChange={ e => saturationHandler(e) } />
      </div>
      <div className="input-pair">
        <label for="lightness">Lightness (between 0 and 100):
        </label>
        <input type="range" name="lightness" min="0" max="100" onChange={ e => lightnessHandler(e) } />
      </div>
    </div>
  </div>
  </>
}

export default ThemeFormatter;