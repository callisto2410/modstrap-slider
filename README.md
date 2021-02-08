# modstrap-slider

Adaptation for noUiSlider.

## Installation

To install a specific version:
```shell script
npm i https://github.com/callisto2410/modstrap-slider.git#v1.0.0
```

To install the current version:
```shell script
npm i https://github.com/callisto2410/modstrap-slider.git
```

## Usage

SCSS:
```scss
@use "~@modstrap/slider";
```

TypeScript:
```ts
import Slider from "@modstrap/slider";

Slider.range(".slider", {
    orientation: "vertical",
    start: [1, 9],
    range: {
        min: 0,
        "25%": 2,
        "50%": 5,
        "75%": 8,
        max: 10,
    },
    pips: {
        mode: "range",
        density: 1,
    }
});
```
