import { Color } from "../../components";
import { RenderedElement } from "../../containers";
import { TShape } from "../../systems/shapes";
import { Variation } from "../../systems/variation";
import { Particle } from "../particle";

/**
 * Represents a delegate used by the renderer to apply a certain property to the
 * particle's RenderedElement. Note that this property is generic and does not
 * have to contain the particle itself.
 */
export type ApplyFunction<T> = (property: T, element: RenderedElement) => void;

/**
 * Holds the options used to configure the renderer for a particle system.
 */
export interface RenderOptions {
    /**
     * The factory used to determine the element (or "shape") that a particle will be rendered as.
     * This variation can also return a resolve-able string.
     *
     * @remarks
     * Depending on the type of value that is returned from the factory, additional
     * processing has to be done.
     *
     * @defaultValue Creates a square-shaped `<div>` element with a size of 10px.
     */
    shapeFactory: Variation<RenderedElement | TShape>;

    /**
     * The delegate used to apply a certain color to the particle's RenderedElement.
     * @defaultValue Applies the specified color to the element's "background" property.
     */
    applyColor?: ApplyFunction<Color>;
    /**
     * The delegate used to apply a certain degree of opacity to the particle's RenderedElement.
     * @defaultValue Applies the specified opacity to the element's "opacity" property.
     */
    applyOpacity?: ApplyFunction<number>;
    /**
     * The delegate used to apply a certain degree of lighting to the particle's RenderedElement.
     * @defaultValue Applies the specified lighting to the element as a brightness filter.
     */
    applyLighting?: ApplyFunction<number>;
    /**
     * The delegate used to apply a certain transform to the particle's RenderedElement.
     * @defaultValue Applies the specified transform to the element as a 3D CSS transform.
     */
    applyTransform?: ApplyFunction<Particle>;
}

/**
 * Returns the default set of renderer options.
 */
export function getDefaultRendererOptions(): RenderOptions {
    return {
        shapeFactory: "square",

        applyColor: defaultApplyColor,
        applyOpacity: defaultApplyOpacity,
        applyLighting: defaultApplyLighting,
        applyTransform: defaultApplyTransform,
    };
}

/**
 * Applies the specified color to the element.
 *
 * @remarks
 */
function defaultApplyColor(color: Color, element: RenderedElement): void {
    element.applyColor(color);
}
/**
 * Applies the specified opacity to the element.
 */
function defaultApplyOpacity(opacity: number, element: RenderedElement): void {
    element.applyOpacity(opacity);
}
/**
 * Applies the specified lighting to the element as a brightness filter.
 *
 * @remarks
 * This function assumes an ambient light with intensity 0.5, and that the
 * particle should be lit from both sides. The brightness filter can exceed 1,
 * to give the particles a "glossy" feel.
 */
function defaultApplyLighting(
    lighting: number,
    element: RenderedElement
): void {
    element.applyBrightness(0.5 + Math.abs(lighting));
}
/**
 * Applies the specified transform to the element as a 3D CSS transform.
 * Also takes into account the current window scroll, to make sure that particles are
 * rendered inside of the fixed container.
 */
function defaultApplyTransform(
    particle: Particle,
    element: RenderedElement
): void {
    element.applyTransform(particle.location, particle.rotation, particle.size);
}
