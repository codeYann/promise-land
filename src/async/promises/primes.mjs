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

function generatePrimes(quota) {
  return new Promise((resolve, reject) => {
    const primes = [];

    while (primes.length < quota) {
      const candidate = random(MAX_PRIME);
      if (isPrime(candidate)) primes.push(candidate);
    }

    resolve(primes);
  });
}

const quota = 1000000;

console.log("Number of primes:");
generatePrimes(quota).then(resolve => console.log(resolve));
console.log("It")
