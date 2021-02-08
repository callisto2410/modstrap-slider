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
export declare type SliderSelector = HTMLElement | string;
export declare type SlidersSelector = NodeListOf<HTMLElement> | string;
export declare type SliderGetValue = string | string[] | undefined;
export declare type SliderSetValue = number | (number | null)[];
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
export declare class Slider {
    /**
     * Default settings.
     *
     * @private
     */
    private static _defaults;
    /**
     * Default settings.
     *
     * @param properties
     */
    static set defaults(properties: SliderProperties);
    /**
     * Default settings for toggle.
     *
     * @private
     */
    private static _defaultsToggle;
    /**
     * Creates a range slider.
     *
     * @param targets
     * @param properties
     */
    static range(targets: SlidersSelector, properties: SliderProperties): void;
    /**
     * Creates a toggle slider.
     *
     * @param targets
     * @param properties
     */
    static toggle(targets: SlidersSelector, properties?: Partial<SliderProperties>): void;
    /**
     * Sets event listeners for the toggle.
     *
     * @param instance
     * @param slider
     * @private
     */
    private static setToggleListeners;
    /**
     * Rounds a number to an integer.
     *
     * @param value
     * @private
     */
    private static round;
    /**
     * Returns an instance of the specified slider.
     *
     * @param target
     * @private
     */
    static getInstance(target: SliderSelector): SliderInstance | undefined;
    /**
     * Sets the specified event handler from the slider.
     *
     * @param target
     * @param name
     * @param callback
     */
    static on(target: SliderSelector, name: string, callback: SliderCallback): void;
    /**
     * Removes the specified event handler from the slider.
     *
     * @param target
     * @param name
     */
    static off(target: SliderSelector, name: string): void;
    /**
     * Returns the value of the specified slider.
     *
     * @param target
     */
    static getValue(target: SliderSelector): SliderGetValue;
    /**
     * Sets the specified value to the slider.
     *
     * @param target
     * @param value
     */
    static setValue(target: SliderSelector, value: SliderSetValue): void;
    /**
     * Updates the properties of the specified slider.
     *
     * @param target
     * @param properties
     * @param fireSetEvent
     */
    static update(target: SliderSelector, properties: Partial<SliderProperties>, fireSetEvent?: boolean): void;
    /**
     * Returns the slider to the default values.
     *
     * @param target
     */
    static reset(target: SliderSelector): void;
    /**
     * Destroys the slider.
     *
     * @param target
     */
    static destroy(target: SliderSelector): void;
}
export default Slider;
