package ex;

import java.util.Scanner;

public class Ex09 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("주민번호를 입력하세요. ex) 012345-7890123");
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		char gender = str.charAt(7);
		System.out.println(gender);
		/*if (gender == '1' ||gender =='3') {
			System.out.println("남자");
		}	else if (gender == '2' || gender == '4') {
			System.out.println("여자");
		}	else {
			System.out.println("잘못입력하셨습니다.");
		}*/
		switch(gender) {
		case 1: case 3:
			System.out.println("남자");
			break;
		case 2: case 4:
			System.out.println("여자");
			break;
		default:
			System.out.println("잘못입력하셨습니다.");
		}
		char location = str.charAt(8);
		switch(location) {
		case 1:
			System.out.println("서울");
			break;
		default:
			System.out.println("not 서울");
		}
		sc.close();
	}

}
