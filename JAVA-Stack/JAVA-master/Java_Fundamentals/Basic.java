import java.util.ArrayList;
public class Basic{
	// #1
	boolean to255(){
		for(int i = 1; i < 256; i++){
			System.out.println(i);
		}
		return true;
	}

	// #2
	boolean oddsTo255(){
		for(int i = 1; i < 256; i++){
			if(i%2 != 0){
				System.out.println(i);
			}
		}
		return true;
	}

	// #3
	boolean sumsTo255(){
		int sum = 0;
		for(int i=1; i < 256; i++){
			sum = sum + i;
			String msg = String.format("New number: %d sum: %d", i, sum);
			System.out.println(msg);
		}
		return true;
	}

	// #4
	boolean iterateArray(Integer[] x){
		for(int i=0; i < x.length; i++){
			System.out.println(x[i]);
		}
		return true;
	}

	// #5
	int findMax(Integer[] x){
		int max = x[0];
		for(int i=0; i < x.length; i++){
			if(x[i] > max){
				max = x[i];
			}
		}
		return max;
	}

	// #6
	int getAverage(Integer[] x){
		int len = x.length;
		int sum = 0;
		for(int i=0; i < x.length; i++){
			sum += x[i];
		}
		return (sum / len);
	}

	// #7
	ArrayList<Integer> oddsArray(){
		ArrayList<Integer> arr = new ArrayList<Integer>();
		for(int i=0; i < 256; i++){
			if(i % 2 != 0){
				arr.add(i);
			}
		}
		return arr;
	}

	// #8
	int greaterThanY(Integer[] x, int y){
		int count = 0;
		for(int i=0; i < x.length; i++){
			if(x[i] > y){
				count += 1;
			}
		}
		return count;
	}

	// #9
	Integer[] squareArray(Integer[] x){
		for(int i=0; i < x.length; i++){
			x[i] = x[i] * x[i];
		}
		return x;
	}

	// #10
	Integer[] removeNegatives(Integer[] x){
		for(int i=0; i < x.length; i++){
			if(x[i] < 0){
				x[i] = 0;
			}
		}
		return x;
	}

	// #11
	Integer[] minMaxAvg(Integer[] x){
		int max = x[0];
		int min = x[0];
		int sum = 0;
		for(int i=0; i < x.length; i++){
			sum += x[i];
			if(x[i] > max){
				max = x[i];
			}
			if(x[i] < min){
				min = x[i];
			}
		}
		Integer[] result = {min, max, (sum / x.length)};
		return result;
	}

	// #12
	Integer[] shiftValues(Integer[] x){
		for(int i=0; i < x.length - 1; i++){
			x[i] = x[i+1];
		}
		x[x.length - 1] = 0;
		return x;
	}
}