import java.util.ArrayList;
import java.util.Arrays;
public class PuzzleTest{
	public static void main(String[] args){
		PuzzleJava puzzle = new PuzzleJava();

		int[] arr1 = new int[]{3,5,1,2,7,9,8,13,25,32};
		//ArrayList<Integer> puza = puzzle.puzA(arr1);
		
		ArrayList<String> arr2 = new ArrayList<String>();
		// How to add multiple items to an ArrayList simultaneously?
		 arr2.add("Nancy");
		 arr2.add("Jinichi");
		 arr2.add("Fujibayashi");
		 arr2.add("Momochi");
		 arr2.add("Ishikawa");
		//ArrayList<String> puzb = puzzle.puzB(arr2);
		char[] alph = puzzle.alphabet();
		int[] r10 = puzzle.random10();
		int[] r10sort = puzzle.random10Sorted();
		String rstr = puzzle.randomString();
		String[] rstrarr = puzzle.randomStringArray();

		System.out.println(rstr);
		System.out.println(Arrays.toString(rstrarr));

	} 
}