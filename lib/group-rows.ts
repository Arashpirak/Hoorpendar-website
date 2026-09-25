import type { ProjectRow } from './project-view';

export type GroupedRow = { first: ProjectRow; count: number; min: number | null; max: number | null };

/** Repeat contracts (same groupKey) collapse into one row with a count and year range. */
export function groupRows(items: ProjectRow[]): GroupedRow[] {
  const groups = new Map<string, ProjectRow[]>();
  for (const p of items) {
    const key = p.group ?? p.id;
    groups.set(key, [...(groups.get(key) ?? []), p]);
  }
  return [...groups.values()].map((list) => {
    const ys = list.map((p) => p.ySH).filter((y): y is number => y !== null);
    return {
      first: list[0],
      count: list.length,
      min: ys.length ? Math.min(...ys) : null,
      max: ys.length ? Math.max(...ys) : null,
    };
  });
}
