package com.saif.assignment2;

import java.util.Scanner;

public class StudentGradeCalculator {
	
	public static void main (String[] args) {

	    Scanner input = new Scanner (System.in);
		int Marks;
		System.out.print("Enter any Marks:");
		Marks = input.nextInt();
		// If Else Statement
		
		if(Marks>=90) {
			System.out.print("You got A Grade!!!");
		}
		
		else if (Marks>=80 && Marks <=89){
			System.out.print("You got B Grade!!!");
		}
		
		else if (Marks>=70 && Marks <=79){
			System.out.print("You got C Grade!!!");
		} 
		
		else if (Marks>=60 && Marks <=69){
			System.out.print("You got D Grade!!!");
		} 
		
		else {
			System.out.println("Sorry You Failed!!!");
		} 
		
		
	}
 }

