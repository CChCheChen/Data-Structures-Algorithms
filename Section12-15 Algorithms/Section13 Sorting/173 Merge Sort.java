class Main {
  public static void main(String[] args) {

		int[] numbers = {99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0};

	    int[] result = mergeSort(numbers);

		for(int i: result) {
			System.out.print(" " + i);
		}
	}

	public static int[] mergeSort(int[] array) {
		if(array.length < 2) return array;

		int length = array.length;
		int midIndex = length/2;
	    int[] left = Arrays.copyOfRange(array, 0, midIndex);
	    int[] right = Arrays.copyOfRange(array, midIndex, length);

	    return merge(mergeSort(left), mergeSort(right));
	}

	public static int[] merge(int[] left, int[] right) {
		int[] result = new int[left.length + right.length];
		int indexLeft = 0;
		int indexRight = 0;
		int index = 0;

		while(indexLeft<left.length && indexRight<right.length) {
			if(left[indexLeft] < right[indexRight]){
				result[index] = left[indexLeft];
				indexLeft++;
			}else{
				result[index] = right[indexRight];
				indexRight++;
			}

			index++;
		}

		//copy the remaining elements of left[], if there are any
		while(indexLeft < left.length) {
			result[index] = left[indexLeft];
			indexLeft++;
			index++;
		}

	    //Copy the remaining elements of right[], if there are any
		while(indexRight < right.length) {
			result[index] = right[indexRight];
			indexRight++;
			index++;
		}

		return result;
	}
}
