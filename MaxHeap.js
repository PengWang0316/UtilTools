class MaxHeap {
	constructor() {
  	this.heap = [];
  }
 	
  getParentIndex(index) {
  	return Math.floor((index - 1) / 2);
  }
  
  swap(indexA, indexB) {
  	const temp = this.heap[indexA];
    this.heap[indexA] = this.heap[indexB];
    this.heap[indexB] = temp;
  }
  
  offer(item) {
  	this.heap.push(item);
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);
    while(parentIndex >= 0 && this.heap[parentIndex] < item) {
    	this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(parentIndex);
    }
  }
  
  poll() {
  	const minNumber = this.heap.shift();
    this.heap.unshift(this.heap.pop());
    let currentIndex = 0;
    while(currentIndex < this.heap.length - 1) {
    	const leftIndex = 2 * currentIndex + 1;
      const rightIndex = 2 * currentIndex + 2;
      if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[leftIndex]) {
      	// Have both left and right node and right less than left value
        this.swap(currentIndex, rightIndex);
        currentIndex = rightIndex;
      } else if (leftIndex < this.heap.length) {
      	// Just have left node or left node is less than right node's value
        this.swap(currentIndex, leftIndex);
        currentIndex = leftIndex;
      } else break;
    }
    return minNumber;
  }
  
  peek() {
  	return this.heap[0];
  }
  
  toArray() {
  	return this.heap;
  }
}
