/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    var dummy = new ListNode(-1);
    var carry = 0;
    var cur = dummy;

    while (l1 != null || l2 != null || carry > 0) {
        var cnt = carry;
        if (l1 !== null) {
            cnt += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            cnt += l2.val;
            l2 = l2.next;
        }
        cur.next = new ListNode(parseInt(cnt % 10));
        carry = parseInt(cnt / 10);
        cur = cur.next;
    }
    return dummy.next;
};
