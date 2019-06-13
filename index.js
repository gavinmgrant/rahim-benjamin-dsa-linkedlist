'use strict';

const LinkedList = require('./LinkedList');

const SSL = new LinkedList();

function main() {
  SSL.insertFirst('Apollo');
  SSL.insertFirst('Boomer');
  SSL.insertFirst('Helo');
  SSL.insertFirst('Husker');
  SSL.insertFirst('Starbuck');
  SSL.insertFirst('Tauhida');
  SSL.remove('squirrel');
  SSL.insertBefore('Athena', 'Boomer');
  SSL.insertAfter('Hotdog', 'Helo');
  SSL.insertAt('Kat', 3);

  SSL.remove('Tauhida');
  SSL.printList();

  return;
}

main();
