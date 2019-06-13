'use strict';
const _Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(insertItem, value) {
    let currentNode = this.head;
    while (value !== currentNode.next.value) {
      console.log(currentNode.next.value);
      currentNode = currentNode.next;
      // if (currentNode.next.value === null) {
      //   return null;
      // }
    }
    let findValue = this.find(value);

    currentNode.next = new _Node(insertItem, findValue);
  }

  insertAfter(insertItem, value) {
    let findValue = this.find(value);
    let tempNext = findValue.next;
    findValue.next = new _Node(insertItem, tempNext);
  }

  insertAt(insertItem, position) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode.next.value !== null) {
      count++;
      currentNode = currentNode.next;
      if (count === position) {
        console.log(currentNode);
        this.insertBefore(insertItem, currentNode);
      }
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  printList() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}
module.exports = LinkedList;
