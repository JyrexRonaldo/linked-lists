import linkedList from "./factory-functions/linklist-factory.js";

// example uses class syntax - adjust as necessary
const list = linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.pop());

console.log(list.find("dog") , "line 15");
console.log(list.contains("dog"));

console.log(list.toString());
