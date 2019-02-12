class Main {
  public static void main(String[] args) {
    int[] numbers = {99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0};

    int length = numbers.length;

		for(int i=0; i<length; i++) {
			int minIndex = i;
			int temp = numbers[i];

			for(int j=i+1; j<length; j++) {
				if(numbers[j] < numbers[minIndex])
					minIndex =j;
			}

			numbers[i] = numbers[minIndex];
			numbers[minIndex] = temp;
		}

		for(int i: numbers) {
			System.out.print(" " + i);
		}
	}
}
