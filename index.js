function getName(name) {
  return name.name
}

function headNode(ll, col) {
  return col[ll]
}

function next(node, col) {
  return col[node.next]
}

function nodeAt(ind, ll, col) {
  let node = col[ll]
  for(let i = 0; i < ind; i++) {
    node = next(node, col)
  }
  return node
}

function addressAt(ind, ll, col) {
  if (ind === 0) {
  return  ll
  } else {
  return nodeAt(ind - 1, ll, col).next
}
}

function indexAt(node, col, ll) {
  let nodey = col[ll]
  let i = 0
  while (node != nodey) {
    nodey = next(nodey, col)
    i++
  }
  return i
}

function insertNodeAt(ind, node, ll, col) {
  let newNode = col[node]
  col[node].next = nodeAt(ind-1, ll, col).next
  nodeAt(ind-1, ll, col).next = node

}

function deleteNodeAt(ind, ll, col) {
  nodeAt(ind-1, ll, col).next = nodeAt(ind, ll, col).next
}
