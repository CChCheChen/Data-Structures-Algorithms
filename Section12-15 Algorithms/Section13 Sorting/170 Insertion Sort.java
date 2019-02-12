class Main {
  public static void main(String[] args) {
    int[] numbers = {99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0};

    int length = numbers.length;
		for(int i=1; i<length; i++) {
			int curr = numbers[i];
			int placeIndex = i-1;

			while(placeIndex >= 0 && numbers[placeIndex] >= curr) {
				int temp = numbers[placeIndex];
				numbers[placeIndex] = numbers[i];
				numbers[i] = temp;

				i = placeIndex;

				placeIndex--;
			}
		}

		for(int i: numbers) {
			System.out.print(" " + i);
		}
	}
}
