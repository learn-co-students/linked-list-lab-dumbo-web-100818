function getName(node) {
  return node.name;
}

function headNode(head, collection) {
  return collection[head];
}

function next(node, collection) {
  let next = node.next;
  return collection[`${next}`];
}

function nodeAt(idx, head, collection) {
  let current = headNode(head, collection)
  for (let i = 0; i < idx; i++) {
    current = next(current, collection)
  }
  return current;
}

function addressAt(idx, head, collection) {
  if (idx === 0) {
    return head;
  } else {
    let node = nodeAt(idx - 1, head, collection)
    return node.next;
  }

}

function indexAt(node, collection, head) {
  let current = headNode(head, collection);
  let idx = 0;
  while(current !== node) {
    idx++
    current = next(current, collection)
  }
  return idx;
}

function insertNodeAt(idx, address, head, collection) {
  let previousNode = nodeAt(idx - 1, head, collection);
  let nextNode = nodeAt(idx, head, collection);
  let nextNodeAddress = addressAt(nextNode, head, collection);
  previousNode.next = address;
  let newNode = collection[address];
  newNode.next = nextNodeAddress;
}

function deleteNodeAt(idx, head, collection) {
  let previousNode;
  let currentNode = headNode(head, collection);
  for (let i = 0; i < idx; i++) {
    previousNode = currentNode;
    currentNode = next(currentNode, collection);
  }
  previousNode.next = currentNode.next;
}
