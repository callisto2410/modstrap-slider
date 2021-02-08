"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
const nouislider_1 = __importDefault(require("nouislider"));
/**
 * Adaptation for noUiSlider.
 *
 * @see range
 * @see toggle
 * @see getValue
 * @see setValue
 * @see reset
 * @see destroy
 *
 * Slider:
 * [Github]{@link https://github.com/callisto2410/modstrap-slider}
 *
 * noUiSlider:
 * Github: {@link https://github.com/leongersen/noUiSlider}
 * Homepage: {@link https://refreshless.com/nouislider/}
 */
class Slider {
    /**
     * Default settings.
     *
     * @param properties
     */
    static set defaults(properties) {
        this._defaults = {
            ...this._defaults,
            ...properties,
        };
    }
    /**
     * Creates a range slider.
     *
     * @param sliders
     * @param properties
     */
    static range(sliders, properties) {
        if (typeof sliders === "string") {
            sliders = document.querySelectorAll(sliders);
        }
        for (const slider of sliders) {
            nouislider_1.default.create(slider, {
                ...this._defaults,
                ...properties,
            });
        }
    }
    /**
     * Creates a toggle slider.
     *
     * @param sliders
     * @param properties
     */
    static toggle(sliders, properties = {}) {
        if (typeof sliders === "string") {
            sliders = document.querySelectorAll(sliders);
        }
        for (const slider of sliders) {
            const instance = nouislider_1.default.create(slider, {
                ...this._defaults,
                ...this._defaultsToggle,
                ...properties,
            });
            slider.classList.add("slider-toggle");
            this.setToggleListeners(instance, slider);
        }
    }
    /**
     * Sets event listeners for the toggle.
     *
     * @param instance
     * @param slider
     * @private
     */
    static setToggleListeners(instance, slider) {
        instance.on("update", (values, handle) => {
            values[handle] === "0"
                ? slider.classList.add("slider-toggle-off")
                : slider.classList.remove("slider-toggle-off");
        });
        slider.addEventListener("click", (event) => {
            const target = event.target;
            if (target.classList.contains("noUi-touch-area")) {
                this.getValue(slider) === "1"
                    ? this.setValue(slider, 0)
                    : this.setValue(slider, 1);
            }
        });
    }
    /**
     * Rounds a number to an integer.
     *
     * @param value
     * @private
     */
    static round(value) {
        return parseFloat(value).toFixed(0);
    }
    /**
     * Returns an instance of the specified slider.
     *
     * @param slider
     * @private
     */
    static getInstance(slider) {
        if (typeof slider === "string") {
            const selector = document.querySelector(slider);
            return selector ? selector.noUiSlider : undefined;
        }
        return slider ? slider.noUiSlider : undefined;
    }
    /**
     * Sets the specified event handler from the slider.
     *
     * @param slider
     * @param name
     * @param callback
     */
    static on(slider, name, callback) {
        const instance = this.getInstance(slider);
        instance && instance.on(name, callback);
    }
    /**
     * Removes the specified event handler from the slider.
     *
     * @param slider
     * @param name
     */
    static off(slider, name) {
        const instance = this.getInstance(slider);
        instance && instance.off(name);
    }
    /**
     * Returns the value of the specified slider.
     *
     * @param slider
     */
    static getValue(slider) {
        const instance = this.getInstance(slider);
        return instance ? instance.get() : undefined;
    }
    /**
     * Sets the specified value to the slider.
     *
     * @param slider
     * @param value
     */
    static setValue(slider, value) {
        const instance = this.getInstance(slider);
        instance && instance.set(value);
    }
    /**
     * Updates the properties of the specified slider.
     *
     * @param slider
     * @param properties
     * @param fireSetEvent
     */
    static update(slider, properties, fireSetEvent) {
        const instance = this.getInstance(slider);
        instance && instance.updateOptions(properties, fireSetEvent);
    }
    /**
     * Returns the slider to the default values.
     *
     * @param slider
     */
    static reset(slider) {
        const instance = this.getInstance(slider);
        instance && instance.reset();
    }
    /**
     * Destroys the slider.
     *
     * @param slider
     */
    static destroy(slider) {
        const instance = this.getInstance(slider);
        instance && instance.destroy();
    }
}
exports.Slider = Slider;
/**
 * Default settings.
 *
 * @private
 */
Slider._defaults = {
    orientation: "horizontal",
    tooltips: true,
    connect: true,
    format: {
        to: Slider.round,
        from: Slider.round,
    },
};
/**
 * Default settings for toggle.
 *
 * @private
 */
Slider._defaultsToggle = {
    tooltips: false,
    connect: "lower",
    start: 0,
    step: 1,
    range: {
        min: 0,
        max: 1,
    },
};
exports.default = Slider;
