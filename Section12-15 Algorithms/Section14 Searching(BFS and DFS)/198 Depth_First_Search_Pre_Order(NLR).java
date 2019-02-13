import java.util.ArrayList;
import java.util.List;

public class 198 Depth_First_Search_Pre_Order(NLR) {

	public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        helper(root, result);
        return result;
    }

    public void helper(TreeNode node, List<Integer> result){
        if(null == node) return;

        //Node --> Left --> Right
        result.add(node.val);
        helper(node.left, result);
        helper(node.right, result);
    }

}

/*class TreeNode {
	 int val;
	 TreeNode left;
	 TreeNode right;
	 TreeNode(int x) { val = x; }
}*/
