public class StringManipulatorTest {
	public static void main(String[] args){
		StringManipulator manipulator = new StringManipulator();
		String trim = manipulator.trimAndConcat(" hello ", "  w orld ");
		Integer index1 = manipulator.getIndexOrNull("index 3", 'e');
		Integer index2 = manipulator.getIndexOrNull("index 3", "ex 3");
		String substring = manipulator.concatSubstring("Java is awful", 0, 8, "fun");

		System.out.println(trim);
		System.out.println(index1);
		System.out.println(index2);
		System.out.println(substring);

	}
}