function combination(
  data: string[],
  out: string[],
  result: string[],
  r: number,
  index: number,
  depth: number
) {
  if (r === 0) {
    result.push(out.join(" "));
    return;
  } else if (depth === data.length) {
    return;
  } else {
    out[index] = data[depth];
    combination(data, out, result, r - 1, index + 1, depth + 1);
    combination(data, out, result, r, index, depth + 1);
  }
}

const data = ["A", "B", "C", "D", "E"];
let out: string[] = [];
let result: string[] = [];
const res = combination(data, out, result, 3, 0, 0);
console.log(result);

/* for (let r = 2; r < data.length; r++) {p
  console.log(`${r} 개 뽑기`);
  let out: string[] = [];
  const res = combination(data, out, r, 0, 0);

}
 */
