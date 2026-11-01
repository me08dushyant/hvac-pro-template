// Photography sourced from Pexels (free to use, no attribution required —
// https://www.pexels.com/license/). Returns a compressed, width-capped URL;
// callers render it with object-fit:cover/contain so exact source aspect
// ratio doesn't matter.
export function pexels(id, width = 1000) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}
