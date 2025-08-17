function node(value = null, next = null) {
  return { value, next };
}

function linkedList() {
  let head = null;

  const prepend = (value) => {
    head = node(value, head);
  };

  const append = (value) => {
    if (head === null) {
      prepend(value);
    } else {
      let tmp = head;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = node(value);
    }
  };

  const getSize = () => {
    let size = 0;
    if (head === null) {
      return size;
    } else {
      let tmp = head;
      size++;
      while (tmp.next !== null) {
        tmp = tmp.next;
        size += 1;
      }
      return size;
    }
  };

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    if (head === null) {
      return head;
    } else {
      let tmp = head;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      return tmp;
    }
  };

  const getItemAtIndex = (index) => {
    let currentIndex = 0;
    if (index === 0) {
      return head;
    } else {
      let tmp = head;
      while (tmp.next !== null && currentIndex !== index) {
        tmp = tmp.next;
        currentIndex++;
      }
      return tmp;
    }
  };

  const pop = () => {
    if (head === null) {
      return "List is empty";
    } else {
      let cur = head;
      let prev = null;

      do {
        prev = cur;
        cur = cur.next;
      } while (cur.next !== null);
      prev.next = cur.next;
      return `${cur.value} deleted`;
    }
  };

  const contains = (key) => {
    let tmp = head;
    if (tmp.value === key) {
      return true;
    }
    while (tmp.next !== null) {
      tmp = tmp.next;
      if (tmp.value === key) {
        return true;
      }
    }
    return false;
  };

  const find = (key) => {
    let currentIndex = 0;
    if (head === null) {
      return null;
    }

    let tmp = head;

    while (tmp.next !== null) {
      if (tmp.value === key) {
        return currentIndex;
      }
      currentIndex += 1;
      tmp = tmp.next;
    }

    if (tmp.value === key) {
      return currentIndex;
    }

    return null;
  };

  const toString = () => {
    if (head === null) {
      return "null";
    } else {
      let tmp = head;
      let linkedListString = `( ${head.value} ) -> `;
      while (tmp.next !== null) {
        tmp = tmp.next;
        linkedListString += `( ${tmp.value} ) -> `;
      }

      return `${linkedListString}null`;
    }
  };

  return {
    prepend,
    append,
    getSize,
    getHead,
    getTail,
    getItemAtIndex,
    pop,
    contains,
    find,
    toString,
  };
}

export default linkedList;
