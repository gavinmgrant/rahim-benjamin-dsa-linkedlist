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
  SSL.display();

  SSL.insertAt('Kat', 3);

  console.log('insert ran')
  SSL.display();

  SSL.remove('Tauhida');

  console.log('checking size')
  SSL.size();
  SSL.display();

  console.log(SSL.isEmpty());
  console.log(SSL.findPrevious('Apollo'));
  console.log(SSL.findLast());

  return;
}

main();

//Question 4 - Mystery program searches for duplicates in the LL and removes them.