package com.saif.assignment2;

import java.util.Scanner;

public class TemperatureDemo {

	public static void main(String[] args) {
		
		Scanner input = new Scanner (System.in);
		double cels, farn;
		
		System.out.print("Enter Celsious = ");
		cels = input.nextDouble();
		farn = (cels * 9/5) + 32;
		
		System.out.println("So in Fahrenheit : "+ farn);
	}
}
