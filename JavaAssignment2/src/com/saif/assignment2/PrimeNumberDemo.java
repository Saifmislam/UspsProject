package com.saif.assignment2;

import java.util.Scanner;

public class PrimeNumberDemo {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("Enter any Positive Integer : ");
		int num =input.nextInt();
		int count =0;
		
		for (int i=2; i<num; i++) {
			
			if (num%i==0);{
			count++;
			break;
		}
		

	}
		if(count==0) {
		System.out.println("Its a Prime Number!");
		
	}else{
		System.out.println("Its NOT a Prime Number!");
		}
	}
}