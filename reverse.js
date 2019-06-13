'use strict';
const linkedlist = require('./index');

function reverelist(ll) {
  //traverse list
  //grab next node and next next node.
  //point next node to
  let currentNode = ll.head;
  while (currentNode !== null) {
    let tempNode = currentNode.next;
    let nextTempNode = currentNode.next.next;
    tempNode.next = currentNode;
    nextTempNode = tempNode; //a b c
  } //c n nx

  return ll;
}

reverelist(linkedlist);
