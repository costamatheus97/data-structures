export class ListNode<T> {
  constructor(data?: T);
  data: T
  next: ListNode<T>
  setData(data: T): ListNode<T>;
  getData(): T;
  setNext(next: ListNode<T>): ListNode<T>;
  getNext(): ListNode<T>;
}