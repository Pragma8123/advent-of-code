// generated by prepare script
import _ from "lodash";

const addPosForPlayer = (p1, p2, c, r) => {
  const s = [p1, p2];
  s[c] = ((s[c] + r - 1) % 10) + 1;
  return s;
};

const rollPart1 = (p1, p2, s1 = 0, s2 = 0, c = 0, r = 0, v = 0) => {
  let [, , _s1, _s2, _c, _r] = [p1, p2, s1, s2, c, r];

  if (r === 3) {
    _r = 1;
    _c = 1 - c;
    if (!c) _s1 += p1;
    else _s2 += p2;
  } else {
    _r += 1;
  }

  if (_s1 >= 1000) return _s2 * v;
  if (_s2 >= 1000) return _s1 * v;

  const _v = v + 1;

  return rollPart1(...addPosForPlayer(p1, p2, _c, _v), _s1, _s2, _c, _r, _v);
};

export const part1 = ([p1, p2]) => rollPart1(p1, p2);

const rollPart2 = _.memoize(
  (p1, p2, s1, s2, c, r) => {
    let [, , _s1, _s2, _c, _r] = [p1, p2, s1, s2, c, r];

    if (r === 3) {        // if we just finished the 3rd role
      _r = 1;             // reset roll to 1 for the next game
      _c = 1 - c;         // switch players for the next game
      if (!c) _s1 += p1;  // if the current player was player 1, add to player 1's score
      else _s2 += p2;     // otherwise add to player 2's score
    } else {
      _r += 1;            // on any other roll but 3, increment roll
    }

    // player 1 has won this game
    if (_s1 >= 21) return [1, 0];

    // player 2 has won this game
    if (_s2 >= 21) return [0, 1];

    // we haven't reach a win condition, initialize score buckets for child universe branches
    const scores = [0, 0];

    // perform the next "roll" (in all 3 child universe)
    [
      rollPart2(...addPosForPlayer(p1, p2, _c, 1), _s1, _s2, _c, _r),
      rollPart2(...addPosForPlayer(p1, p2, _c, 2), _s1, _s2, _c, _r),
      rollPart2(...addPosForPlayer(p1, p2, _c, 3), _s1, _s2, _c, _r),
    ].forEach((n) => {
      // add the outcome of each child universe's roll to our scores
      scores[0] += n[0];
      scores[1] += n[1];
    });

    return scores;
  },
  (...args) => args.join(",")
);

export const part2 = ([p1, p2]) => {
  const winnings = rollPart2(p1, p2, 0, 0, 0, 0);
  return Math.max(...winnings);
};
