package com.saif.assignment2;

import java.util.Scanner;

public class EvenOddDemo {

	public static void main(String[] args) {
	
		
		Scanner input = new Scanner (System.in);
		
		int num;
		
		System.out.print("Enter Any Positive Number:");
		num = input.nextInt();
		
		
		if (num%2 == 0) {
			System.out.println("Its an Even Number!");
		}
		
		else {
			System.out.println("Its a Odd Number!");
		}
		
	}
}
