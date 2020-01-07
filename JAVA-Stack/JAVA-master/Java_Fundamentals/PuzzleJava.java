import java.util.ArrayList;
import java.util.Arrays;
import java.util.concurrent.ThreadLocalRandom;
public class PuzzleJava{
	
	ArrayList<Integer> puzA(int[] arr){
		ArrayList<Integer> results = new ArrayList<Integer>();
		for(int i=0; i<arr.length; i++){
			System.out.println(arr[i]);
			if(arr[i] > 10){
				results.add(arr[i]);
			}
		}
		return results;
	}

	ArrayList<String> puzB(ArrayList<String> arr){
		ArrayList<String> results = new ArrayList<String>();
		ArrayList<String> shuffle = new ArrayList<String>();
		System.out.println(arr);
		int size = arr.size();
		// Q: why didn't the loop below function correctly when written as:
		// for(int i=0; i<arr.size(); i++)
		// ??
		// A: Because the size of the array decreased with every iteration.
		// arr.size() is a *function*, and its return value changes
		// with every iteration of the loop -- while i, our incrementer, is increasing at the same
		// time! So when i=2 and arr.size() -> 2, the loop stops,
		// leaving us with two orphan elements in arr!
		for(int i=0; i<size; i++){
			int randomNum = ThreadLocalRandom.current().nextInt(0,  arr.size());
			shuffle.add(arr.get(randomNum));
			arr.remove(randomNum);
		}
		System.out.println(shuffle);
		System.out.println(arr);
		return results;
	}

	char[] alphabet(){
		// line below is via Stack O: https://stackoverflow.com/questions/17575840/better-way-to-generate-array-of-all-letters-in-the-alphabet
		// was looking for a loop, which you can do, and it seems like a good way to learn about
		// char as a data type, but this *is* simpler.
		String letters = "abcdefghijklmnopqrstuvwxyz";
		// Also via Stack O: https://stackoverflow.com/questions/7347856/how-to-convert-a-string-into-an-arraylist
		ArrayList<String> alphabet = new ArrayList<String>(Arrays.asList(letters.split("")));
		char[] shuffle;
		shuffle = new char[26];
		for (int i=0; i<26; i++){
			int random = ThreadLocalRandom.current().nextInt(0,  alphabet.size());
			//more from Stack O: https://stackoverflow.com/questions/7853502/how-to-convert-parse-from-string-to-char-in-java
			shuffle[i] = alphabet.get(random).charAt(0);
			alphabet.remove(random);
		}
		String vowels = "aeiouy";
		String msg1 = "";
		String msg2 = "";
		//even more SO cribbing: https://stackoverflow.com/questions/506105/how-can-i-check-if-a-single-character-appears-in-a-string
		//leaving all these SO links here as a memento googli, I guess
		if (vowels.indexOf(shuffle[0]) != -1){
			msg1 = " ...and it's a vowel!";
		}
		if (vowels.indexOf(shuffle[25]) != -1){
			msg2 = " ...and it's a vowel!";	
		}
		System.out.println("First letter of array: " + shuffle[0] + msg1);
		System.out.println("Last letter of array: " + shuffle[25] + msg2);
		return shuffle;
	}

	int[] random10(){
		int[] randArr;
		randArr = new int[10];
		for(int i=0; i<10; i++){
			int random = ThreadLocalRandom.current().nextInt(55,  100);
			randArr[i] = random;
		}
		return randArr;
	}

	int[] random10Sorted(){
		int[] sortArr = random10();
		int temp;
		// Bubble sort because that's the only sorting algo I know right now
		for(int i=0; i<sortArr.length - 1; i++){
			for(int k=0;k<sortArr.length-1;k++){
				if(sortArr[i] > sortArr[i+1]){
					temp = sortArr[i + 1];
					sortArr[i+1] = sortArr[i];
					sortArr[i] = temp;
				}
			}
		}
		System.out.println(Arrays.toString(sortArr));
		System.out.println("Min: " + sortArr[0]);
		System.out.println("Max: " + sortArr[9]);
		return sortArr;

	}

	String randomString(){
		String letters = "abcdefghijklmnopqrstuvwxyz";
		char[] randChars;
		randChars = new char[5];
		for(int i=0; i<5; i++){
			int random = ThreadLocalRandom.current().nextInt(0,  26);
			randChars[i] = letters.charAt(random);
		}
		String randStr = new String(randChars);
		return randStr;
	}

	String[] randomStringArray(){
		String[] randStrs;
		randStrs = new String[10];
		for(int i=0;i<10; i++){
			randStrs[i] = randomString();
		}
		return randStrs;
	}
}
