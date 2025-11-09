const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }
  root() {
    return this.rootTree;
  }

  add(data) {
    const newNode = new Node(data);
    if(this.rootTree===null){
      this.rootTree=newNode;
      return;
    }
    let current = this.rootTree;
    while (true) {
      if(newNode.data < current.data){
        if (current.left === null) {
          current.left = newNode; 
          return;
        } else {
          current= current.left;
        }
      } else {
          if (current.right  === null) {
            current.right  = newNode; 
            return;
          } else {
            current= current.right;
          }
      }
    }
  }

  find(data) {
    let current = this.rootTree;
      while (current !== null) {
        if(data == current.data){
          return current;
        } else if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return null;
    }


  has(data) {
      let current = this.rootTree;
      while (current !== null) {
        if(data == current.data){
          return true;
        } else if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return false;
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
  }

  min() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  max() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }
}

module.exports = {
  BinarySearchTree
};