import React, { useState } from 'react';
import './ThemeFormatter.scss';


function ThemeFormatter() {
  const [primary, setPrimary] = useState({
    hue: 266,
    saturation: 60,
    lightness: 41,
  })
  const [secondary, setSecondary] = useState({
    hue: 0,
    saturation: 0,
    lightness: 50,
  })
  const [font, setFont] = useState({
    hue: 0,
    saturation: 0,
    lightness: 50,
  })
  const [fontSize, setFontSize] = useState({
    heading: 18,
    subHeading: 16,
    base: 14,
    text: 12,
    subText: 10,
  })

  const handleCSSVaribleUpdate = (event, tag) => {
    if (event.target.name.includes('primary')) {
      document.getElementsByTagName('html')[0].style.setProperty(event.target.name, event.target.value + (event.target.name.includes("hue") ? "" : "%"));
      setPrimary({
        ...primary,
        [tag]: event.target.value
      })
    } else if (event.target.name.includes('secondary')) {
      document.getElementsByTagName('html')[0].style.setProperty(event.target.name, event.target.value + (event.target.name.includes("hue") ? "" : "%"));
      setSecondary({
        ...secondary,
        [tag]: event.target.value
      })
    } else if (event.target.name.includes('font')) {
      document.getElementsByTagName('html')[0].style.setProperty(event.target.name, event.target.value + (event.target.name.includes("hue") ? "" : "%"));
      setFont({
        ...font,
        [tag]: event.target.value
      })
    } else if (event.target.name.includes('font-size')) {
      document.getElementsByTagName('html')[0].style.setProperty(event.target.name, event.target.value + "pt");
      setFontSize({
        ...fontSize,
        [tag]: event.target.value
      })
    }
  }
  return <>
    <div className="ThemeFormatter">
      <div className="input-group">
        <div className="group-header">
          Primary Color:
        </div>
        <div className="input-pair">
          <label htmlFor="--primary-hue">Hue (between 0 and 359):
          </label>
          <input data-id="jshfjkdsafkl" type="range" name="--primary-hue" min="0" max="359" onChange={ e => handleCSSVaribleUpdate(e, 'hue') } value={ primary.hue } />
        </div>
        <div className="input-pair">
            <label htmlFor="saturation">Saturation (between 0 and 100):
          </label>
          <input type="range" name="--primary-saturation" min="0" max="100" onChange={ e => handleCSSVaribleUpdate(e, 'saturation') } value={ primary.saturation } />
        </div>
        <div className="input-pair">
          <label htmlFor="lightness">Lightness (between 0 and 100):
          </label>
          <input type="range" name="--primary-lightness" min="0" max="100" onChange={ e => handleCSSVaribleUpdate(e, 'lightness') } value={ primary.lightness } />
        </div>
      </div>
      <div className="input-group">
        <div className="group-header">
          Secondary Color:
        </div>
        <div className="input-pair">
          <label htmlFor="hue">Hue (between 0 and 359):
          </label>
          <input type="range" name="--secondary-hue" min="0" max="359" onChange={ e => handleCSSVaribleUpdate(e, 'hue') } value={ secondary.hue } />
        </div>
        <div className="input-pair">
            <label htmlFor="saturation">Saturation (between 0 and 100):
          </label>
          <input type="range" name="--secondary-saturation" min="0" max="100" onChange={ e => handleCSSVaribleUpdate(e, 'saturation') } value={ secondary.saturation } />
        </div>
        <div className="input-pair">
          <label htmlFor="lightness">Lightness (between 0 and 100):
          </label>
          <input type="range" name="--secondary-lightness" min="0" max="100" onChange={ e => handleCSSVaribleUpdate(e, 'lightness') } value={ secondary.lightness } />
        </div>
      </div>
      <div className="input-group">
        <div className="group-header">
          Font Color:
        </div>
        <div className="input-pair">
          <label htmlFor="hue">Hue (between 0 and 359):
          </label>
          <input type="range" name="--font-hue" min="0" max="359" onChange={ e => handleCSSVaribleUpdate(e, 'hue') } value={ font.hue } />
        </div>
        <div className="input-pair">
            <label htmlFor="saturation">Saturation (between 0 and 100):
          </label>
          <input type="range" name="--font-saturation" min="0" max="100" onChange={ e => handleCSSVaribleUpdate(e, 'saturation') } value={ font.saturation } />
        </div>
        <div className="input-pair">
          <label htmlFor="lightness">Lightness (between 0 and 100):
          </label>
          <input type="range" name="--font-lightness" min="0" max="100" onChange={ e => handleCSSVaribleUpdate(e, 'lightness') } value={ font.lightness } />
        </div>
      </div>
      <div className="input-group">
        <div className="group-header">
          FontSize:
        </div>
        <div className="input-pair">
          <label htmlFor="hue">Heading:
          </label>
          <input type="range" name="--font-size-1" min="5" max="40" onChange={ e => handleCSSVaribleUpdate(e, 'heading') } value={ fontSize.heading } />
        </div>
        <div className="input-pair">
          <label htmlFor="hue">Sub-Heading:
          </label>
          <input type="range" name="--font-size-2" min="5" max="40" onChange={ e => handleCSSVaribleUpdate(e, 'subHeading') } value={ fontSize.subHeading } />
        </div>
        <div className="input-pair">
          <label htmlFor="hue">Base:
          </label>
          <input type="range" name="--font-size-3" min="5" max="40" onChange={ e => handleCSSVaribleUpdate(e, 'base') } value={ fontSize.base } />
        </div>
        <div className="input-pair">
          <label htmlFor="hue">Text:
          </label>
          <input type="range" name="--font-size-4" min="5" max="40" onChange={ e => handleCSSVaribleUpdate(e, 'text') } value={ fontSize.text } />
        </div>
        <div className="input-pair">
          <label htmlFor="hue">Sub-Text:
          </label>
          <input type="range" name="--font-size-5" min="5" max="40" onChange={ e => handleCSSVaribleUpdate(e, 'subText') } value={ fontSize.subText } />
        </div>
      </div>
    </div>
  </>
}

export default ThemeFormatter;