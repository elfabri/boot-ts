// Support.ai needs to calculate the performance
// scores for their support agents. Each agent
// receives customer ratings for their support interactions.

// Complete the averageScore function.
// It takes an array of customer ratings numbers
// as input and returns their average score.

// If the array is empty, return 0.

export function averageScore(ratings: number[]) {
  let len = ratings.length;
  if (ratings == null || len == 0) {
      return 0;
  }

  let total = 0;
  for (let i = 0; i < len; i++) {
    total += ratings[i];
  }

  return total/len;
}
