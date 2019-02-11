class Main {
  public static void main(String[] args) {
	    String[] letters = {"a", "d", "z", "e", "r", "b"};
	    int[] numbers = {2, 65, 34, 2, 1, 7, 8};

	    Arrays.sort(letters);
	    Arrays.sort(numbers);

	    for(String s : letters) {
	    	System.out.print(" " + s);
	    }

	    System.out.println();

	    for(int i : numbers) {
	    	System.out.print(" " + i);
	    }
	  }
}
