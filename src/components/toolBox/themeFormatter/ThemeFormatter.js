import React, { useState } from 'react';
import './ThemeFormatter.scss';


function ThemeFormatter() {
  const [ActiveColor, setActiveColor] = useState({
    primary: {
    hue: 266,
    saturation: 60,
    lightness: 41,
    }
  }, {
    secondary: {
    hue: 0,
    saturation: 0,
    lightness: 50,
    },
  }, {
    font: {
      hue: 0,
      saturation: 0,
      lightness: 50,
    },
  })

  const colorPalette = [{
    name: 'Sea Blue',
    value: {
      primaryHue: 266,
      primarySaturation: 60,
      primaryLightness: 41,
      secondaryHue: 0,
      secondarySaturation: 0,
      secondaryLightness: 50,
      fontHue: 0,
      fontSaturation: 0,
      fontLightness: 50,

    }
  }, {
    name: 'Ocean Green',
    value: {
      primaryHue: 156,
      primarySaturation: 60,
      primaryLightness: 41,
      secondaryHue: 0,
      secondarySaturation: 0,
      secondaryLightness: 50,
      fontHue: 0,
      fontSaturation: 0,
      fontLightness: 50,

    }
  }]
  const colorPaletteTemplate = () => colorPalette.map((color, colorI) => <div className="input-pair">
    <label>{ color.name }
    </label>
    <div className="color-scheme">
      <div className="color-cell" style={{
        backgroundColor: `hsl(${color.primaryHue}, ${color.primarySaturation}%, ${color.primaryLightness}%)`
      }}></div>
      <div className="color-cell" style={{
        backgroundColor: `hsl(${color.secondaryHue}, ${color.secondarySaturation}%, ${color.secondaryLightness}%)`
      }}></div>
      <div className="color-cell" style={{
        backgroundColor: `hsl(${color.fontHue}, ${color.fontSaturation}%, ${color.fontLightness}%)`
      }}></div>
      <div className="color-cell" style={{
        backgroundColor: `#ff6622`
      }}></div>
    </div>
  </div>)

  const handleCSSVaribleUpdate = (event, tag) => {

    // document.getElementsByTagName('html')[0].style.setProperty(event.target.name, event.target.value + (event.target.name.includes("hue") ? "" : "%"));
    // if (event.target.name.includes('primary')) {
    //   // setPrimary({
    //   //   ...primary,
    //   //   [tag]: event.target.value
    //   // })
    // } else if (event.target.name.includes('secondary')) {
    //   document.getElementsByTagName('html')[0].style.setProperty(event.target.name, event.target.value + (event.target.name.includes("hue") ? "" : "%"));
    //   setSecondary({
    //     ...secondary,
    //     [tag]: event.target.value
    //   })
    // } else if (event.target.name.includes('font-size')) {
    //   document.getElementsByTagName('html')[0].style.setProperty(event.target.name, event.target.value + "pt");
    //   setFontSize({
    //     ...fontSize,
    //     [tag]: event.target.value
    //   })
    // } else {
    //   document.getElementsByTagName('html')[0].style.setProperty(event.target.name, event.target.value + (event.target.name.includes("hue") ? "" : "%"));
    //   setFont({
    //     ...font,
    //     [tag]: event.target.value
    //   })
    // }
  }
  return <>
    <div className="ThemeFormatter">
      <div className="input-group">
        <div className="group-header">
          Primary Color:
        </div>
        { colorPaletteTemplate() }
        <div className="input-pair">
          <label htmlFor="--primary-hue">Ocean Blue:
          </label>
          <div className="color-scheme">
            <div className="color-cell"></div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default ThemeFormatter;