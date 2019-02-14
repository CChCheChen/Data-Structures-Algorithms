/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isValidBST(TreeNode root) {
        if(null == root)
            return true;

        return isValidBSTHelper(root, Double.NEGATIVE_INFINITY, Double.POSITIVE_INFINITY);
    }

    public boolean isValidBSTHelper(TreeNode node, double min, double max){
        if(node.val <= min || node.val >= max)
            return false;

        if(null != node.left && !isValidBSTHelper(node.left, min, node.val))
            return false;

        if(null != node.right && !isValidBSTHelper(node.right, node.val, max))
            return false;

        return true;
    }
}
