package example;

import java.util.Scanner;

public class Example10 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] a = new int[10];
		for (int i = 0; i < a.length; i++) {
			a[i] = i+1;
		}
		int[] b = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
		
		//length
		
		int[][] arr = new int[2][3];
		System.out.println(arr.length);
		//2
		int[][] arr2 = new int[5][7];
		System.out.println(arr2.length);
		//5
		//7
		int[][] arr3 = new int[8][3];
		//3
		
		Scanner sc = new Scanner(System.in);
		int[] a4 = new int[5];
		for(int i = 0; i<a4.length; i++) {
			
			a4[i] = sc.nextInt();
			
		}
		sc.close();
		
		for(int i = 0; i<a4.length; i++) {
			
			System.out.print(a4[i] + "\t");
			
		}
		System.out.println();
		
		Scanner sc2 = new Scanner(System.in);
		int[] a5 = new int[5];
		for(int i = 0; i<a5.length; i++) {
			/*switch(i) {
			case 0:
				a5[i+1] = sc2.nextInt(); 
			case 1:
				a5[i-1] = sc2.nextInt();
			default:
				a5[i] = sc2.nextInt();
			}*/
			/*if (i == 0 || i == 1) {
				if (i == 0) {
					a5[i+1] = sc2.nextInt();
				} else {
					a5[i-1] = sc2.nextInt();
				}
			}*/
			a5[i] = sc2.nextInt();
			
		}
		sc2.close();
		int temp = a5[0];
		a5[0] = a5[1];
		a5[1]= temp;
		for(int i = 0; i<a5.length; i++) {
			
			System.out.print(a5[i] + "\t");
			
		}
		System.out.println();
		
	}

}
