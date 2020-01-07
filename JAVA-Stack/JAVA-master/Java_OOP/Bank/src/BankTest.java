
public class BankTest {

	public static void main(String[] args) {
		BankAccount b1 = new BankAccount(154.76, 249.84);
		BankAccount b2 = new BankAccount(2053.31, 5);
		BankAccount b3 = new BankAccount(341.76, 56.32);
		b3.totalAmts();
		b2.withdraw(3000);
		b3.withdraw(200);
		
		

	}

}
