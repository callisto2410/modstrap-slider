import noUiSlider from "nouislider";

export interface SliderInstance extends noUiSlider.noUiSlider {
}

export interface SliderProperties extends noUiSlider.Options {
}

export interface SliderElement extends HTMLElement {
    noUiSlider: SliderInstance;
}

export interface SliderCallback {
    (values: any[], handle: number, unencodedValues: number[]): void;
}

export type SliderSelector = HTMLElement | string;

export type SlidersSelector = NodeListOf<HTMLElement> | string;

export type SliderGetValue = string | string[] | undefined;

export type SliderSetValue = number | (number | null)[];

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
export class Slider {
    /**
     * Default settings.
     *
     * @private
     */
    private static _defaults: Partial<SliderProperties> = {
        orientation: "horizontal",
        tooltips: true,
        connect: true,
        format: {
            to: Slider.round,
            from: Slider.round,
        },
    }

    /**
     * Default settings.
     *
     * @param properties
     */
    public static set defaults(properties: SliderProperties) {
        this._defaults = {
            ...this._defaults,
            ...properties,
        }
    }

    /**
     * Default settings for toggle.
     *
     * @private
     */
    private static _defaultsToggle: SliderProperties = {
        tooltips: false,
        connect: "lower",
        start: 0,
        step: 1,
        range: {
            min: 0,
            max: 1,
        },
    }

    /**
     * Creates a range slider.
     *
     * @param targets
     * @param properties
     */
    public static range(targets: SlidersSelector, properties: SliderProperties): void {
        if (typeof targets === "string") {
            targets = document.querySelectorAll(targets) as NodeListOf<HTMLElement>;
        }

        for (const slider of targets) {
            noUiSlider.create(slider, {
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
    public static toggle(targets: SlidersSelector, properties: Partial<SliderProperties> = {}): void {
        if (typeof targets === "string") {
            targets = document.querySelectorAll(targets) as NodeListOf<HTMLElement>;
        }

        for (const slider of targets) {
            const instance = noUiSlider.create(slider, {
                ...this._defaults,
                ...this._defaultsToggle,
                ...properties,
            });

            slider.classList.add("slider-toggle");
            this.setToggleListeners(instance, slider as SliderElement);
        }
    }

    /**
     * Sets event listeners for the toggle.
     *
     * @param instance
     * @param slider
     * @private
     */
    private static setToggleListeners(instance: SliderInstance, slider: SliderElement): void {
        instance.on("update", (values: string[], handle: number) => {
            values[handle] === "0"
                ? slider.classList.add("slider-toggle-off")
                : slider.classList.remove("slider-toggle-off");
        });

        slider.addEventListener("click", (event: Event) => {
            const target = event.target as HTMLElement;

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
    private static round(value: string): string {
        return parseFloat(value).toFixed(0);
    }

    /**
     * Returns an instance of the specified slider.
     *
     * @param target
     * @private
     */
    public static getInstance(target: SliderSelector): SliderInstance | undefined {
        if (typeof target === "string") {
            const selector = document.querySelector(target) as SliderElement | null;

            return selector ? selector.noUiSlider : undefined;
        }

        return target ? (target as SliderElement).noUiSlider : undefined;
    }

    /**
     * Sets the specified event handler from the slider.
     *
     * @param target
     * @param name
     * @param callback
     */
    public static on(target: SliderSelector, name: string, callback: SliderCallback): void {
        const instance = this.getInstance(target);

        instance && instance.on(name, callback);
    }

    /**
     * Removes the specified event handler from the slider.
     *
     * @param target
     * @param name
     */
    public static off(target: SliderSelector, name: string): void {
        const instance = this.getInstance(target);

        instance && instance.off(name);
    }

    /**
     * Returns the value of the specified slider.
     *
     * @param target
     */
    public static getValue(target: SliderSelector): SliderGetValue {
        const instance = this.getInstance(target);

        return instance ? instance.get() : undefined;
    }

    /**
     * Sets the specified value to the slider.
     *
     * @param target
     * @param value
     */
    public static setValue(target: SliderSelector, value: SliderSetValue): void {
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
    public static update(target: SliderSelector, properties: Partial<SliderProperties>, fireSetEvent?: boolean): void {
        const instance = this.getInstance(target);

        instance && instance.updateOptions(properties, fireSetEvent);
    }

    /**
     * Returns the slider to the default values.
     *
     * @param target
     */
    public static reset(target: SliderSelector): void {
        const instance = this.getInstance(target);

        instance && instance.reset();
    }

    /**
     * Destroys the slider.
     *
     * @param target
     */
    public static destroy(target: SliderSelector): void {
        const instance = this.getInstance(target);

        instance && instance.destroy();
    }
}

export default Slider;
