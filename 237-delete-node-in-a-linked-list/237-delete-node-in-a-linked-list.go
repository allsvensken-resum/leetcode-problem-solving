/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteNode(node *ListNode) {
    curr := node
    curr.Val = curr.Next.Val
    curr.Next = curr.Next.Next 
}