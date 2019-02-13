import java.util.ArrayList;
import java.util.List;

public class 198 Depth_First_Search_In_Order(LNR) {

	public List<Integer> inorderTraversal(TreeNode root){
		List<Integer> result = new ArrayList<>();
		helper(root, result);
		return result;
	}

	public void helper(TreeNode node, List<Integer> result) {
		if(null == node) return;

		//Left --> Node --> Right
		helper(node.left, result);
		result.add(node.val);
		helper(node.right, result);
	}
}

/*class TreeNode {
	 int val;
	 TreeNode left;
	 TreeNode right;
	 TreeNode(int x) { val = x; }
}*/
