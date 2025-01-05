const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this._addNode(this.rootNode, newNode);
    }
  }

  _addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this._hasNode(this.rootNode, data);
  }

  _hasNode(node, data) {
    if (node === null) {
      return false;
    }
    if (data === node.data) {
      return true;
    }
    return data < node.data ? this._hasNode(node.left, data) : this._hasNode(node.right, data);
  }

  find(data) {
    return this._findNode(this.rootNode, data);
  }

  _findNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      return node;
    }
    return data < node.data ? this._findNode(node.left, data) : this._findNode(node.right, data);
  }

  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  _removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      
      node.data = this._findMinNode(node.right).data;
      node.right = this._removeNode(node.right, node.data);
      return node;
    }
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }
    return this._findMinNode(this.rootNode).data;
  }

  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }
    return this._findMaxNode(this.rootNode).data;
  }

  _findMaxNode(node) {
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }
}

module.exports = {
  BinarySearchTree
};