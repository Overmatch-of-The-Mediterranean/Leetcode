class Trie {
  children
  isEnd
  constructor() {
    this.children = {}
    this.isEnd = false
  }

  insert(word: string): void {
    let node = this
    for (const ch of word) {
      if (node.children[ch.charCodeAt(0) - 'a'.charCodeAt(0)] === undefined) {
        node.children[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = new Trie()
      }
      node = node.children[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
    }
    node.isEnd = true
  }

  search(word: string): boolean {
    let node = this
    for (const ch of word) {
      node = node.children[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
      if (node === undefined) {
        return false
      }
    }
    return node.isEnd
  }

  startsWith(prefix: string): boolean {
    let node = this
    for (const ch of prefix) {
      node = node.children[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
      if (node === undefined) {
        return false
      }
    }
    return true
  }
}
