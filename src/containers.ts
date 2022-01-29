import { Color, Vector } from "./components";
import { settings } from "./settings";
import { Lazy } from "./util";

export interface RenderedElement {
    readonly id: string;
    readonly isActive: boolean;
    readonly initialSize: number;
    displayStyle: string;
    getNode(): any;
    cloneElement(): RenderedElement;
    remove(): void;
    applyColor(color: Color): void;
    applyOpacity(opacity: number): void;
    applyBrightness(brightness: number): void;
    appendChild(child: RenderedElement): RenderedElement;
    getBoundingClientRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    applyTransform(location: Vector, rotation: Vector, scale: number): void;
}

export type TFigmaNode = FrameNode | StarNode | PageNode | GroupNode;

export class FigmaRenderedElement implements RenderedElement {
    private childIds = new Set<string>();

    constructor(private node: TFigmaNode, readonly initialSize: number = 20) {}

    get id(): string {
        return this.node.id;
    }

    get isActive() {
        return true;
    }

    getNode(): TFigmaNode {
        return this.node;
    }

    get displayStyle(): string {
        if (this.node.type === "PAGE") {
            return "block";
        }
        return this.node.visible ? "block" : "none";
    }

    set displayStyle(style: string) {
        if (this.node.type === "PAGE") {
            return;
        }
        this.node.visible = style !== "none";
    }

    cloneElement(): FigmaRenderedElement {
        return new FigmaRenderedElement(this.node.clone(), this.initialSize);
    }

    remove(): void {
        this.node.remove();
    }

    appendChild(child: FigmaRenderedElement): FigmaRenderedElement {
        this.childIds.add(child.id);

        if (this.node.type === "PAGE") {
            this.node = figma.group([child.getNode()], this.node);
        } else if (this.node.type === "GROUP") {
            this.node = figma.group(
                [...this.node.children, child.getNode()],
                this.node.parent
            );
        }

        return child;
    }

    applyColor(color: Color): void {
        if (this.node.type === "PAGE") {
            console.warn("Attempting to applyColor on PageNode");
            return;
        }
        let targetNode = this.node as any;
        if (targetNode.children?.[0]) {
            targetNode = targetNode.children[0];
        }
        targetNode.fills = [
            {
                type: "SOLID",
                color: {
                    r: color.r / 255,
                    g: color.g / 255,
                    b: color.b / 255,
                },
            },
        ];
    }

    applyOpacity(opacity: number): void {
        if (this.node.type === "PAGE") {
            console.warn("Attempting to applyOpacity on PageNode");
            return;
        }
        this.node.opacity = opacity;
    }

    applyBrightness(brightness: number): void {
        // TODO: maybe use effects
    }

    applyTransform(location: Vector, rotation: Vector, scale: number): void {
        if (this.node.type === "PAGE") {
            console.warn("Attempting to applyTransform to PageNode");
            return;
        }
        if (scale < 0.01) {
            this.node.visible = false;
        } else {
            this.node.visible = true;
        }

        this.node.resize(this.initialSize * scale, this.initialSize * scale);
        this.node.x = location.x;
        this.node.y = location.y;

        var skewX = Math.tan((rotation.x * Math.PI) / 180);
        var skewY = Math.tan((rotation.y * Math.PI) / 180);
        this.node.relativeTransform = [
            [1, skewX, location.x],
            [skewY, 1, location.y],
        ];
    }

    getBoundingClientRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
    } {
        if (this.node.type === "PAGE") {
            return figma.viewport.bounds;
        }
        return this.node.absoluteRenderBounds!;
    }
}

/**
 * Checks if the specified container is 'active', meaning not undefined and attached to the DOM.
 */
function isContainerActive(container: RenderedElement): boolean {
    return container && container.isActive;
}

/**
 * Represents the root container for DOM elements of the library.
 */
export const rootContainer = new Lazy<RenderedElement>(
    () => new FigmaRenderedElement(figma.currentPage as any),
    isContainerActive
);
/**
 * Represents the debugging container of the library, only active if debugging is enabled.
 */
export const debugContainer = new Lazy<RenderedElement>(
    () => new FigmaRenderedElement(figma.currentPage as any),
    isContainerActive
);
/**
 * Represents the particle container of the library.
 * This is where the particle DOM elements get rendered into.
 */
export const particleContainer = new Lazy<RenderedElement>(
    () => new FigmaRenderedElement(figma.currentPage as any),
    isContainerActive
);
