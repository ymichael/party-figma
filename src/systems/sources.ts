import { Circle, Rect, Vector } from "../components";
import { randomInsideCircle, randomInsideRect } from "./random";

/**
 * Represents a method used for sampling points to emit particles from.
 */
export type SourceSampler = () => Vector;
/**
 * Represents all types where a source type can be dynamically inferred.
 */
export type DynamicSourceType = Circle | Rect;

/**
 * Dynamically infers a source sampler for the specified source type.
 */
export function dynamicSource(source: unknown): SourceSampler {
    if (source instanceof Circle) {
        return circleSource(source);
    }
    if (source instanceof Rect) {
        return rectSource(source);
    }
    throw new Error(`Cannot infer the source type of '${source}'.`);
}

/**
 * Creates a sampler to retrieve random points inside a specified rectangle.
 */
export function rectSource(source: Rect): SourceSampler {
    return () => randomInsideRect(source);
}
/**
 * Creates a sampler to retrieve random points inside a specified circle.
 */
export function circleSource(source: Circle): SourceSampler {
    return () => randomInsideCircle(source);
}
