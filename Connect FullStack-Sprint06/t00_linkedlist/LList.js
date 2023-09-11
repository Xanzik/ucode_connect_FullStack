class LLData {
constructor(data) {
    this.data = data;
    this.next = null;
}
}

class LList {
constructor() {
    this.head = null;
}

append(data) {
    const newNode = new LLData(data);
    if (this.head === null) {
    this.head = newNode;
    } else {
    let current = this.head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
    }
}

*[Symbol.iterator]() {
    let current = this.head;
    while (current !== null) {
    yield current.data;
    current = current.next;
    }
}

getFirst() {
    if (this.head === null) {
    return undefined;
    }
    return this.head.data;
}

getLast() {
    if (this.head === null) {
    return undefined;
    }
    let current = this.head;
    while (current.next !== null) {
    current = current.next;
    }
    return current.data;
}

add(value) {
    const newNode = new LLData(value);
    if (this.head === null) {
    this.head = newNode;
    } else {
    let current = this.head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
    }
}

remove(value) {
    if (this.head === null) {
    return;
    }

    if (this.head.data === value) {
    this.head = this.head.next;
    return;
    }

    let current = this.head;
    while (current.next !== null) {
    if (current.next.data === value) {
        current.next = current.next.next;
        return;
    }
    current = current.next;
    }
}

removeAll(value) {
    while (this.head !== null && this.head.data === value) {
    this.head = this.head.next;
    }

    let current = this.head;
    while (current !== null && current.next !== null) {
    if (current.next.data === value) {
        current.next = current.next.next;
    } else {
        current = current.next;
    }
    }
}

contains(value) {
    let current = this.head;
    while (current !== null) {
    if (current.data === value) {
        return true;
    }
    current = current.next;
    }
    return false;
}

clear() {
    this.head = null;
}

count() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
    count++;
    current = current.next;
    }
    return count;
}

toString() {
    let result = "";
    let current = this.head;
    while (current !== null) {
    result += current.data;
    if (current.next !== null) {
        result += ", ";
    }
    current = current.next;
    }
    return result;
}

getIterator() {
    return this[Symbol.iterator]();
}

addFromArray(arrayOfData) {
    for (const data of arrayOfData) {
        this.append(data);
    }
    }

filter(callback) {
    const filteredList = new LList();
    let current = this.head;
    while (current !== null) {
    if (callback(current.data)) {
        filteredList.append(current.data);
    }
    current = current.next;
    }
    return filteredList;
}
}

module.exports = {LList};
  