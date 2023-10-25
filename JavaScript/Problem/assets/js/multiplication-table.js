let input = +prompt("কত ঘরের নামতা দেখতে চান?");
let range = +prompt("কত পর্যন্ত দেখতে চাও?");

const mulTable = (input, range) => {
  console.log(`Presenting Multiplication Table of : ${input}`);
  for (let i = 1; i <= range; i++) {
    let result = `${input} x ${i} = ${i * input}`
    console.log(result);    
  }
}

mulTable(input, range);