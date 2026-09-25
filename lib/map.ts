// Shared by the map build script and the map component, so pin sizes and layout agree.

/** Pin radius in map units for a city with `count` projects. */
export const pinRadius = (count: number) => 8 + 3.8 * Math.sqrt(count);

/** Minimum gap between neighbouring pins after layout. */
export const PIN_GAP = 3;
