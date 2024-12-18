const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota, fn) {
  const primes = [];

  function findPrimes() {
    while (primes.length < quota) {
      const candidate = random(MAX_PRIME);
      if (isPrime(candidate)) primes.push(candidate);
    }

    fn(primes);
  }

  setTimeout(findPrimes, 0);
}

const quota = 1000000;

console.log("Number of primes:");
generatePrimes(quota, (primes) => {
  console.log(primes);
});
console.log("It")
