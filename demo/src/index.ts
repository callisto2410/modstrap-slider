import "./index.scss";

import Slider from "../../src/Slider";

/* Vertical. */
Slider.range(".test-vertical .slider-1", {
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

Slider.range(".test-vertical .slider-2", {
    orientation: "vertical",
    start: [20, 50, 80],
    range: {
        min: 0,
        "25%": 25,
        "50%": 50,
        "75%": 75,
        max: 100,
    },
    pips: {
        mode: "range",
        density: 1,
    }
});

Slider.range(".test-vertical .slider-3", {
    orientation: "vertical",
    start: [200, 400, 600, 800],
    range: {
        min: 0,
        "25%": 150,
        "50%": 500,
        "75%": 850,
        max: 1000,
    },
    pips: {
        mode: "range",
        density: 1,
    }
});


/* Horizontal. */
Slider.range(".test-horizontal .slider-1", {
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

Slider.range(".test-horizontal .slider-2", {
    start: [20, 50, 80],
    range: {
        min: 0,
        "25%": 25,
        "50%": 50,
        "75%": 75,
        max: 100,
    },
    pips: {
        mode: "range",
        density: 1,
    }
});

Slider.range(".test-horizontal .slider-3", {
    start: [200, 400, 600, 800],
    range: {
        min: 0,
        "25%": 150,
        "50%": 500,
        "75%": 850,
        max: 1000,
    },
    pips: {
        mode: "range",
        density: 1,
    }
});

Slider.range(".test-horizontal .slider-4", {
    start: 500,
    connect: "lower",
    range: {
        min: 0,
        max: 1000,
    },
    pips: {
        mode: "range",
        density: 1,
    }
});


/* Vertical toggle. */
Slider.toggle(".vertical-toggle .toggle-1", {
    orientation: "vertical",
});

Slider.toggle(".vertical-toggle .toggle-2", {
    orientation: "vertical",
    start: 1,
});


/* Horizontal toggle. */
Slider.toggle(".horizontal-toggle .toggle-1");

Slider.toggle(".horizontal-toggle .toggle-2", {
    start: 1,
});
