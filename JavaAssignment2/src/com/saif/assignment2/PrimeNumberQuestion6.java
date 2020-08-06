package com.saif.assignment2;

import java.util.Scanner;

public class PrimeNumberQuestion6 {

	public static void main(String[] args) {
		
		
		int m , n, count=0, totalPrime=0;
		
		Scanner input = new Scanner(System.in);
		
		System.out.print("Enter intial Number: ");
		
		m = input.nextInt();
		
		System.out.print("Enter Ending Number: ");
		
		n = input.nextInt();
		
		for(int i=m; i<=n; i++)
		{
	
			for(int j=2; j<=i-1; j++) {
				if(i%j==0)
				{
					count++;
					break;
					}
						
				}
				if (count==0){
				System.out.println(i);
				totalPrime++;
				
				}
		
				count=0;
		}
				
		System.out.print("Total Prime Number = "+totalPrime);
	}
	}
	
