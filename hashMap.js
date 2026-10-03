class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.initialCapacity = capacity;
    this.capacity = capacity;
    this.size = 0;
    this.buckets = this.#createBuckets(capacity);
  }

  #createBuckets(capacity) {
    return Array.from({ length: capacity }, () => []);
  }

  getBucket(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bounds');
    }
    return this.buckets[index];
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const bucket = this.getBucket(this.hash(key));

    for (const entry of bucket) {
      if (entry[0] === key) {
        entry[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;

    if (this.size > this.loadFactor * this.capacity) {
      this.grow();
    }
  }

  grow() {
    const oldEntries = this.entries();

    this.capacity *= 2;
    this.buckets = this.#createBuckets(this.capacity);
    this.size = 0;

    for (const [key, value] of oldEntries) {
      this.set(key, value);
    }
  }

  get(key) {
    const bucket = this.getBucket(this.hash(key));

    for (const [k, v] of bucket) {
      if (k === key) return v;
    }

    return undefined;
  }

  has(key) {
    const bucket = this.getBucket(this.hash(key));
    return bucket.some(([k]) => k === key);
  }

  remove(key) {
    const bucket = this.getBucket(this.hash(key));

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.capacity = this.initialCapacity;
    this.buckets = this.#createBuckets(this.capacity);
    this.size = 0;
  }

  keys() {
    return this.entries().map(([key]) => key);
  }

  values() {
    return this.entries().map(([, value]) => value);
  }

  entries() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        result.push([key, value]);
      }
    }
    return result;
  }
}
