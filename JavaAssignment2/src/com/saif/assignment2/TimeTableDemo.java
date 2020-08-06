 package com.saif.assignment2;

import java.util.Scanner;

public class TimeTableDemo {

	public static void main(String[] args) {
		
		Scanner input = new Scanner (System.in);
		int num;
		System.out.print("Enter any Number : ");
		num = input.nextInt();
		for (int i = 1; i <=10; i++){
			System.out.println(num+ " X "+i + " = "+num*i);
		}
	}

}


