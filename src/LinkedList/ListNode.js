class ListNode {
  constructor(data) {
    this._data = data;
    this._next = null;
  }

  setData(data) {
    this._data = data;
    return this;
  }

  getData() {
    return this._data;
  }

  setNext(next) {
    if (next && !(next instanceof ListNode)) {
      throw new Error('You can only add LinkedListNode type objects');
    }
  
    this._next = next;

    return this;
  }

  getNext() {
    return this._next;
  }
}