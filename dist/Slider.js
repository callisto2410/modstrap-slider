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
 * @see getInstance
 * @see on
 * @see off
 * @see getValue
 * @see setValue
 * @see update
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
     * @param targets
     * @param properties
     */
    static range(targets, properties) {
        if (typeof targets === "string") {
            targets = document.querySelectorAll(targets);
        }
        for (const slider of targets) {
            nouislider_1.default.create(slider, {
                ...this._defaults,
                ...properties,
            });
        }
    }
    /**
     * Creates a toggle slider.
     *
     * @param targets
     * @param properties
     */
    static toggle(targets, properties = {}) {
        if (typeof targets === "string") {
            targets = document.querySelectorAll(targets);
        }
        for (const slider of targets) {
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
     * @param target
     * @private
     */
    static getInstance(target) {
        if (typeof target === "string") {
            const selector = document.querySelector(target);
            return selector ? selector.noUiSlider : undefined;
        }
        return target ? target.noUiSlider : undefined;
    }
    /**
     * Sets the specified event handler from the slider.
     *
     * @param target
     * @param name
     * @param callback
     */
    static on(target, name, callback) {
        const instance = this.getInstance(target);
        instance && instance.on(name, callback);
    }
    /**
     * Removes the specified event handler from the slider.
     *
     * @param target
     * @param name
     */
    static off(target, name) {
        const instance = this.getInstance(target);
        instance && instance.off(name);
    }
    /**
     * Returns the value of the specified slider.
     *
     * @param target
     */
    static getValue(target) {
        const instance = this.getInstance(target);
        return instance ? instance.get() : undefined;
    }
    /**
     * Sets the specified value to the slider.
     *
     * @param target
     * @param value
     */
    static setValue(target, value) {
        const instance = this.getInstance(target);
        instance && instance.set(value);
    }
    /**
     * Updates the properties of the specified slider.
     *
     * @param target
     * @param properties
     * @param fireSetEvent
     */
    static update(target, properties, fireSetEvent) {
        const instance = this.getInstance(target);
        instance && instance.updateOptions(properties, fireSetEvent);
    }
    /**
     * Returns the slider to the default values.
     *
     * @param target
     */
    static reset(target) {
        const instance = this.getInstance(target);
        instance && instance.reset();
    }
    /**
     * Destroys the slider.
     *
     * @param target
     */
    static destroy(target) {
        const instance = this.getInstance(target);
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
