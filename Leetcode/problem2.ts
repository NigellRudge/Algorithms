//Problem 2
class ListNode {
    val: number = 0
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
const input1 = [2,4,1]
const input2 = [5,4,4]

function createListFromArray(inputArray:number[]):ListNode{
    let headNode: ListNode = new ListNode(inputArray[0])
    let pointerNode = headNode;
    for(let item of inputArray.slice(1)){
        let node = new ListNode(item)
        pointerNode.next = node
        pointerNode = node
    }
    return headNode;
}
function createArrayFromList(list: ListNode | null) {
    let curr = list
    let output = []
    while(curr !== null){
        output.push(curr.val)
        curr = curr.next
    }
    return output
}

function loopThroughList(node: ListNode|null) {
    let contents:[string] = [''];
    while(node !== null){
        contents!.push(node!.val.toString())
        node = node!.next
    }
    return parseInt(contents!.reverse().join(''),10);
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const valueList1 = loopThroughList(l1)
    const valueList2 = loopThroughList(l2)
    let total = (valueList1 + valueList2).toString().split('').reverse()
    let firstNode: ListNode | null = null
    let pointerNode: ListNode | null = null
    firstNode = new ListNode(parseInt(total[0]))
    pointerNode = firstNode
    for(let item of total.slice(1)){
        let node = new ListNode(parseInt(item))
        pointerNode.next = node;
        pointerNode = node;
    }
    return firstNode;
};

function solution(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(0)
    let p = l1, q = l2, curr = dummyHead
    let carry = 0
    while(p != null || q != null){
        let x = (p !== null) ? p.val : 0
        let y = (q !== null) ? q.val : 0
        let sum = carry + x + y
        carry = parseInt((sum / 10).toString())
        curr.next = new ListNode(sum % 10)
        curr = curr.next;
        if( p !== null)
            p = p.next
        if( q !== null)
            q = q.next
    }
    if(carry > 0){
        curr.next = new ListNode(carry)
    }
    return dummyHead.next
}
