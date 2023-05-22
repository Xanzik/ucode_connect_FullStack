class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    const newNode = { data: value, next: null };
    if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    } else {
    this.tail.next = newNode;
    this.tail = newNode;
    }
    this.length++;
  }

  remove(value) {
    if (!this.head) {
    return;
    }
    // Handle case where the head node needs to be removed
    while (this.head && this.head.data === value) {
    this.head = this.head.next;
    this.length--;
    if (!this.head) {
      this.tail = null;
    }
    }
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode) {
    if (currentNode.data === value) {
      if (currentNode === this.tail) {
        this.tail = prevNode;
      }
      prevNode.next = currentNode.next;
      this.length--;
    } else {
      prevNode = currentNode;
    }
    currentNode = currentNode.next;
    }
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
    if (currentNode.data === value) {
        return true;
    }
    currentNode = currentNode.next;
    }
    return false;
  }

  *[Symbol.iterator]() {
    let currentNode = this.head;

    while (currentNode) {
    yield currentNode.data;
    currentNode = currentNode.next;
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  count() {
    return this.length;
  }

  log() {
    let currentNode = this.head;
    const values = [];

    while (currentNode) {
    values.push(currentNode.data);
    currentNode = currentNode.next;
    }

    console.log(values.join(','));
  }
}

function createLinkedList(arr) {
  const linkedList = new LinkedList();
  for (const value of arr) {
    linkedList.add(value);
  }
  return linkedList;
}
