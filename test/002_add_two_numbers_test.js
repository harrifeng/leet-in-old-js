describe("Test leetcode 001", function() {
    it("contains spec with an expectation", function() {
        expect(addTwoNumbers(null, null)).toEqual(null);
        var a1 = getLinkFromArray([2, 4, 3]);
        var b1 = getLinkFromArray([5, 6, 4]);
        var r1 = addTwoNumbers(a1, b1);
        var e1 = getLinkFromArray([7, 0, 8]);
        expect(compareListNode(r1, e1)).toBe(true);
    });
});
