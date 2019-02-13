import java.util.ArrayList;
import java.util.List;

public class 198 Depth_First_Search_Post_Order(LRN) {

    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        helper(root, result);
        return result;
    }

	private void helper(TreeNode node, List<Integer> result) {
		if(null == node) return;

		// Left --> Right --> Node
		helper(node.left, result);
		helper(node.right, result);
		result.add(node.val);
	}

}

/*class TreeNode {
	 int val;
	 TreeNode left;
	 TreeNode right;
	 TreeNode(int x) { val = x; }
}*/
