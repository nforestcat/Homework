package example;

import java.util.Scanner;

public class Test1 {

	public static void main(String[] args) {
		try (// TODO Auto-generated method stub
				//import java.util.Scanner;
			Scanner sc = new Scanner(System.in)) {
			int jumsu = sc.nextInt();//sc.next(); sc.nextLine(); sc.nextFloat();
			if(jumsu >= 90) {
				System.out.println("A");
			} else if (jumsu >= 80) {
				System.out.println("B");
			} else if (jumsu >= 70) {
				System.out.println("C");
			} else if (jumsu >= 60) {
				System.out.println("D");
			} else  {
				System.out.println("F");
			}
			sc.close();
		}
	}

}
