const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);

        if (this.length === 0) {
            this._tail = node;
            this._head = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
            node.next = null;
            this._tail = node;
        }
        this.length = this.length + 1;
        return this;
    }

    head() {
        if (this._head === null) {
            return null;
        }
        return this._head.data;
    }

    tail() {
        if (this._tail === null) {
            return null;
        }
        return this._tail.data;
    }

    at(index) {
        let temp = this._head;
        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                return temp.data;
            }
            temp = temp.next;
        }
    }

    insertAt(index, data) {
        let node = new Node(data);

        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else if (index === 0) {
            node.next = this._head;
            this._head.prev = node;
            this._head = node;
        } else if (index === this.length - 1) {
            this._tail.prev.next = node;
            node.prev = this._tail.prev;
            node.next = this._tail;
            this._tail.prev = node;
        } else {
            let temp = this._head;
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
            temp.prev.next = node;
            node.prev = temp.prev;
            node.next = temp;
            temp.prev = node;
        }
        this.length = this.length + 1;
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let temp;
        let temp2;
        let temp_next;
        let temp_prev;
        if (this.length === 0) {
            this._head = null;
            this._tail = null;
        } else if (index === 0 && this.length ===1) {
            this._head.next = null;
            this._tail.next = null;
            this.length = 0;
        } else if (index === 0) {
            temp = this._head.next;
            temp_next = temp.next;
            this._head = temp;
            this._head.next = temp_next;
            this._head.prev = null;
            this.length = this.length - 1;
        } else if (index === this.length - 1) {
            temp = this._tail.prev;
            temp_prev = temp.prev;
            this._tail = temp;
            this._tail.prev = temp_prev;
            this._tail.next = null;
            this.length = this.length - 1;
        } else {
            temp2 = this._head;
            for (let i = 0; i <= index; i++) {
                temp = temp2;
                if (i === index) {
                    temp_next = temp.next;
                    temp_prev = temp.prev;
                    temp_next.prev = temp_prev;
                    temp_prev.next = temp_next;
                }
                temp2 = temp2.next;
            }
        }
        this.length = this.length - 1;
        return this;
    }

    reverse() {
        let item = this._head;
        let temp;
        let temp_next;
        let ht;

        if (this.length === 1) {
            temp = this._head;
            this._head = this._tail;
            this._tail= temp;
        } else {
            for (let i = 0; i < this.length; i++) {
                temp = item;
                temp_next = item.next;
                item = item.next;
                temp.next = temp.prev;
                temp.prev = temp_next;
            }
            ht = this._head;
            this._head = this._tail;
            this._tail = ht;
        }
        return this;
    }


    indexOf(data) {
        let temp = this._head;
        console.log(temp);
        for (let i = 0; i < this.length; i++) {
            if(temp.data===data) {
                return i;
            }
            temp = temp.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
