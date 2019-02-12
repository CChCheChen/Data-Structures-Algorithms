class Main {
  public static void main(String[] args) {
	  int[] numbers = {99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0};

    //Each iteration bubbles the largest one to the Right end of the array
    for(let i=0; i<numbers.length-1; i++){
      for(let j=0; j<numbers.length-1; j++){
        if(numbers[j] > numbers[j+1]){
          let temp = numbers[j];
          numbers[j] = numbers[j+1];
          numbers[j+1] = temp;
        }
      }
    }

    //Each iteration bubbles the smallest one to the Left end of the array
		for(int i=0; i<numbers.length-1; i++) {
			for(int j=i+1; j<numbers.length; j++) {
				if(numbers[i] <= numbers[j]){
					continue;
				}else{
					int temp = numbers[i];
					numbers[i] = numbers[j];
					numbers[j] = temp;
				}
			}
		}

		for(int i: numbers) {
			System.out.print(" " + i);//[ 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283 ]
		}
	}
}
