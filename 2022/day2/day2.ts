const parseInput = (input: string) => input.split('\n').map((line) => line.split(' '));

const ROCK = 'A';
const PAPER = 'B';
const SCISSORS = 'C';
const LOSE = 'X';
const DRAW = 'Y';
const WIN = 'Z';

export function part1 (input: string): number {
  const guide = parseInput(input).map((line) => line.map((choice) => {
    switch (choice) {
      case 'X':
        return 'A';
      case 'Y':
        return 'B';
      case 'Z':
        return 'C';
      default:
        return choice;
    }
  }));

  let score = 0;

  for (const [player1, player2] of guide) {
    switch (player2) {
      case ROCK: {
        score += 1;
        break;
      }
      case PAPER: {
        score += 2;
        break;
      }
      case SCISSORS: {
        score += 3;
        break;
      }
    }

    // Draw
    if (player1 === player2) {
      score += 3;
      continue;
    }

    // Win
    if (player1 === ROCK && player2 === PAPER) score += 6;
    if (player1 === PAPER && player2 === SCISSORS) score += 6;
    if (player1 === SCISSORS && player2 === ROCK) score += 6;
  }
  return score;
}

export function part2 (input: string): number {
  const guide = parseInput(input);
  let score = 0;

  for (const [player1, player2] of guide) {
    switch (player1) {
      case ROCK: {
        switch (player2) {
          case LOSE: {
            score += 3 + 0;
            break;
          }

          case DRAW: {
            score += 1 + 3;
            break;
          }

          case WIN: {
            score += 2 + 6;
            break;
          }
        }
        break;
      }

      case PAPER: {
        switch (player2) {
          case LOSE: {
            score += 1 + 0;
            break;
          }

          case DRAW: {
            score += 2 + 3;
            break;
          }

          case WIN: {
            score += 3 + 6;
            break;
          }
        }
        break;
      }

      case SCISSORS: {
        switch (player2) {
          case LOSE: {
            score += 2 + 0;
            break;
          }

          case DRAW: {
            score += 3 + 3;
            break;
          }

          case WIN: {
            score += 1 + 6;
            break;
          }
        }
        break;
      }
    }
  }

  return score;
}
