'use strict';

const LinkedList = require('./LinkedList');
const DoubleLL = require('./Dll')

const SSL = new LinkedList();
const DLL = new DoubleLL();

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

  console.log('checking size');
  SSL.size();
  SSL.display();

  console.log(SSL.isEmpty());
  console.log(SSL.findPrevious('Apollo'));
  console.log(SSL.findLast());
  console.log('REVERSING')
  SSL.reverseList();
  SSL.display();
  // SSL.thirdFromEnd();
  // console.log('middle', SSL.MiddleOfList());

  // console.log('cycle:', SSL.cycleInAList());
  // SSL.insertFirst('Apollo');
  // SSL.display();
  // console.log('cycle:', SSL.cycleInAList());


  // DLL.insertFirst('Aquaria');
  // DLL.insertFirst('Caprica');
  // DLL.insertFirst('Gemenon');
  // DLL.insertFirst('Picon');
  // DLL.insertFirst('Sagittaron');
  // DLL.display();

  // DLL.insertLast('Tauron');
  // console.log('Tauron added to the end')
  // DLL.display();

  // DLL.insertBefore('Thing', 'Picon');
  // console.log('Inserted Thing before Picon');
  // DLL.display();

  // DLL.insertAfter('After', 'Caprica');
  // console.log('Inserted After after Caprica');
  // DLL.display();

  // DLL.insertAt('Put Me In The Middle', 5);
  // console.log('Silly message should be 5');
  // DLL.display();

  // DLL.remove('Picon');
  // console.log('Removing Picon');
  // DLL.display();


  return;
}

main();

//Question 4 - Mystery program searches for duplicates in the LL and removes them.

module.exports = SSL;
