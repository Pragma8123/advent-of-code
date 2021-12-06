// generated by prepare script
import _ from "lodash";

const createMemoKey = (t, d) => `${t},${d}`;

export const determineEffectOfFish = _.memoize((timer, duration) => {
  if (!duration) return 1;

  const nextTimer = timer > 0 ? timer - 1 : 6;
  const next = determineEffectOfFish(nextTimer, duration - 1);

  return timer ? next : next + determineEffectOfFish(8, duration - 1);
}, createMemoKey);

export const solve = (arr, duration) => {
  return arr.reduce((t, ft) => (t += determineEffectOfFish(ft, duration)), 0);
};
