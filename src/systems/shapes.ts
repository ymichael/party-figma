import { RenderedElement, FigmaRenderedElement } from "../containers";
import { Variation, evaluateVariation } from "./variation";

export type TShape = "square" | "circle" | "star";

/**
 * Resolves the specified element factory using the resolvable elements, if needed.
 */
export function resolveShapeFactory(
    factory: Variation<TShape | RenderedElement>
): RenderedElement {
    // Retrieve the unresolved element from the factory.
    const shape = evaluateVariation(factory);
    if (typeof shape === "string") {
        let node: StarNode | FrameNode;
        const initialSize = shape === "star" ? 40 : 20;
        if (shape === "star") {
            node = figma.createStar();
        } else {
            node = figma.createFrame();
            if (shape === "circle") {
                node.cornerRadius = 100;
            }
        }
        node.resize(initialSize, initialSize);
        node.fills = [{ type: "SOLID", color: { r: 0, b: 0, g: 0 } }];
        return new FigmaRenderedElement(node, initialSize);
    }
    return shape;
}
