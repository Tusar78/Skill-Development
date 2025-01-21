//GCD(গসাগু) ও LCM(লসাগু) নির্ণয়ের জন্য C program Practical

const findGCD = (n1, n2) => {
  while (n2 !== 0) {
    let rem = n1 % n2;
    n1 = n2;
    n2 = rem;
  }

  return n1;
};

const result1 = findGCD(60, 30);
console.log(result1);

const findLCM = (n1, n2, gcd) => {
    const lcm = (n1 * n2) / gcd(n1, n2);
    return lcm;    
}

const result2 = findLCM(60, 30, findGCD);
console.log(result2);
