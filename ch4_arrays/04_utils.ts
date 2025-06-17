// rest parameters

/*
 * Fix the formatLabels function signature
 * to accept a variable number of "labels"
 * using rest parameters
 *
 * Complete the formatLabels function, it should:
 * * Return the string "No Labels" if there are no labels
 *
 * * Return the string "Label: LABEL"
 * if there is only one label
 * (where LABEL is the first label)
 *
 * * Return the string "Labels: LABEL, LABEL"
 * if there are multiple labels
 * (LABEL is each label separated by a comma and a space)
 */

export function formatLabels(...labels: string[]): string {
  switch (labels.length) {
    case 0:
      return "No Labels";
    case 1:
      return `Label: ${labels[0]}`;
    default:
      let l = "";
      l = labels.join(", ");
      return `Labels: ${l}`;
  }
}

