/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

class Solution {
    public int climbStairs(int n) {
        if(n<=3) return n;

        int[] counts = new int[n+1];
        //int[0] = 0; NO need to assign 0 to int[] which already has DEFAULT value as 0 when created
        counts[1] = 1;
        counts[2] = 2;
        for(int i=3; i<=n; i++){
            counts[i] = counts[i-1] + counts[i-2];
        }
        return counts[n];
    }
}
