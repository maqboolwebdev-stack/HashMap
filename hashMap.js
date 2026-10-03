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

}
