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
  console.log('insert after ran')
  SSL.printList();
  SSL.insertAt('Kat', 3);
  console.log('insert ran')
  SSL.printList();

  SSL.remove('Tauhida');

  return;
}

main();
