import { Color, Vector } from "./components";
import { settings } from "./settings";
import { Lazy } from "./util";

export interface RenderedElement {
    readonly id: string;
    readonly isActive: boolean;
    readonly initialSize: number;
    displayStyle: string;
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

export type TFigmaNode = FrameNode | StarNode;

export class FigmaRenderedElement implements RenderedElement {
    private childIds = new Set<string>();

    constructor(readonly node: TFigmaNode, readonly initialSize: number = 20) {}

    get id(): string {
        return this.node.id;
    }

    get isActive() {
        return true;
    }

    get displayStyle(): string {
        return this.node.visible ? "block" : "none";
    }

    set displayStyle(style: string) {
        this.node.visible = style !== "none";
    }

    cloneElement(): FigmaRenderedElement {
        return new FigmaRenderedElement(this.node.clone(), this.initialSize);
    }

    remove(): void {
        for (let childId of Array.from(this.childIds)) {
            const child = figma.getNodeById(childId);
            child.remove();
        }
        this.node.remove();
    }

    appendChild(child: FigmaRenderedElement): FigmaRenderedElement {
        this.childIds.add(child.id);
        return child;
    }

    applyColor(color: Color): void {
        this.node.fills = [
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
        this.node.opacity = opacity;
    }

    applyBrightness(brightness: number): void {
        // TODO: maybe use effects
    }

    applyTransform(location: Vector, rotation: Vector, scale: number): void {
        if (scale < 0.01) {
            this.node.visible = false;
            return;
        }

        this.node.visible = true;
        this.node.resize(this.initialSize * scale, this.initialSize * scale);
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
