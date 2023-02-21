const data1: string[][] = [
  ["A", "B", "C", "D"],
  ["A", "C", "D"],
  ["A", "B", "D"],
  ["B", "C", "D"],
  ["C", "D"],
  ["A", "B"],
];

const data2: string[][] = [
  ["A", "B"],
  ["B", "C"],
  ["C", "D"],
  ["E", "F", "A"],
  ["B", "F"],
  ["D", "F"],
];

type pharmacyStat = {
  firstMedicine: string;
  secondMedicine: string;
  frequency: number;
};

class Pharmacy {
  private stat: Map<string, pharmacyStat>;

  constructor() {
    this.stat = new Map<string, pharmacyStat>();
  }

  put(data: string[]) {
    data.sort((a: string, b: string) => (a > b ? 1 : -1));
    for (let i = 0; i < data.length - 1; i++) {
      for (let j = i + 1; j < data.length; j++) {
        const key = `${data[i]}_${data[j]}`;
        const s = this.stat.get(key);
        if (s) {
          s.frequency += 1;
        } else {
          const p: pharmacyStat = {
            firstMedicine: data[i],
            secondMedicine: data[j],
            frequency: 1,
          };
          this.stat.set(key, p);
        }
      }
    }
  }

  dump() {
    if (this.stat.size == 0) {
      console.log("no data");
      return;
    }

    let mapToArray = [...this.stat];
    mapToArray.sort((a: [string, pharmacyStat], b: [string, pharmacyStat]) =>
      a[1].frequency > b[1].frequency ? -1 : 1
    );

    mapToArray.forEach((v: [string, pharmacyStat]) => {
      console.log(
        `first: ${v[1].firstMedicine}, second: ${v[1].secondMedicine}, frequency: ${v[1].frequency}`
      );
    });
  }
}

const p = new Pharmacy();

console.log("first");
data1.forEach((v) => {
  p.put(v);
});
p.dump();

console.log("second");
data2.forEach((v) => {
  p.put(v);
});
p.dump();
