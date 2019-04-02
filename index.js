function getName(node) {
  return node["name"]
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(head, collection) {
  let nextAddress = head["next"]
  return collection[nextAddress]
}

function nodeAt(index, linkedList, collection) {
  let node = collection[linkedList]
  for(let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection) {
  let address
  if (index === 0) {
    address = linkedList
  } else {
    let node = nodeAt(index-1, linkedList, collection)
    address = node["next"]
  }
  return address
}

function indexAt(node, collection, linkedList) {
  let collectionLength = Object.keys(collection).length
  let currentNode = collection[linkedList]
  for(let i = 0; i < collectionLength; i++) {
    if (node === currentNode) {
      return i
    } else {
      currentNode = next(currentNode, collection)
    }
  }
}

function findUnassignedNode(linkedList, collection) {
  for (var key in collection) {
    let node = collection[key]
    if (node["next"] === "") return node
  }
}

function insertNodeAt(index, address, linkedList, collection) {
  let node = nodeAt(index - 1, linkedList, collection)
  let unassignedNode = findUnassignedNode(linkedList, collection)
  unassignedNode["next"] = node["next"]
  node["next"] = address
}

function deleteNodeAt(index, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection)
  let currentNode = nodeAt(index, linkedList, collection)
  previousNode["next"] = currentNode["next"]
}