import java.util.ArrayList;
import java.util.concurrent.ThreadLocalRandom;

public class BankAccount {
	protected String acctNum;
	protected double checking;
	protected double savings;
	static int numOfAccts = 0;
	static ArrayList<BankAccount> acctList = new ArrayList<BankAccount>();
	static double totalMoney = 0;
	
	public BankAccount(double checking, double savings) {
		this.acctNum = randomAcctNum();
		this.checking = checking;
		this.savings = savings;
		acctList.add(this);
		numOfAccts++;
	}
	
	private String randomAcctNum() {
		String rando = "";
		for(int i=0; i<10; i++) {
			rando += ThreadLocalRandom.current().nextInt(0,  9);
		}
		return rando;
	}
	
	//getters
	public double getChecking() {
		return this.checking;
	}
	
	public double getSavings() {
		return this.savings;
	}
	
	public void deposit(double amt, char acct) {
		if (acct == 's' || acct == 'S') {
			this.savings += amt;
			System.out.println("Savings balance: $" + this.savings);
		}
		else if (acct == 'c' || acct == 'C'){
			this.checking += amt;
			System.out.println("Checking balance: $" + this.checking);
		}
		else {System.out.println("Deposit into s for savings or c for checking");
		}
	}
	
	public void withdraw(double amt) {
		if (this.checking < amt) {
			System.out.println("Insufficient funds");
		}
		else {
			this.checking -= amt;
			System.out.println("Withdrew $" + amt + " from checking account. New balance: $" + this.checking);
		}
		

	}
	public static void totalAmts() {
		double totalChecking = 0;
		double totalSavings = 0;
		for (BankAccount ba: acctList) {
			totalChecking += ba.checking;
			totalSavings += ba.savings;
		}
		System.out.println("Total of all checking accounts: $" + totalChecking);
		System.out.println("Total of all savings accounts: $" + totalSavings);
	}
}
