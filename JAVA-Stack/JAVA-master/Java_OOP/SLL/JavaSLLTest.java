public class JavaSLLTest{
	public static void main(String[] args){
		JavaSLL sl1 = new JavaSLL();
		Node n1 = new Node(5);
		Node n2 = new Node(6);
		JavaSLL sl2 = new JavaSLL(3);
		sl2.add(2);
		sl2.add(22);
		sl2.printValues();
	}
}