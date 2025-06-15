/*
Complete the interpolateComment function.
It accepts three parameters:

    * An id number
    * A comment string
    * A comments array of strings and numbers

It updates the comments array,
replacing the first instance of id
with the given comment.

Your function should mutate the comments array
directly, rather than returning a new array.
*/

export function interpolateComment(
  id: number,
  comment: string,
  comments: (string | number)[],
) {
  for (let i=0; i < comments.length; i++) {
		if (id == comments[i]) {
		  comments[i] = comment;
		}
	}
}

