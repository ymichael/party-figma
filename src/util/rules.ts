import { Particle } from "../particles/particle";

/**
 * Contains a set of pre-defined particle despawning rules.
 */
export const despawningRules = {
    /**
     * A rule that despawns a particle once its lifetime is over.
     */
    lifetime: function (particle: Particle): boolean {
        return particle.lifetime <= 0;
    },
    /**
     * A rule that despawns a particle once its y-coordinate is outside of the document.
     */
    bounds: function (particle: Particle): boolean {
        return (
            particle.location.y >
            figma.viewport.bounds.y + figma.viewport.bounds.height
        );
    },
};
