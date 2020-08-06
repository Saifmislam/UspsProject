package com.saif.assignment2;

import java.util.Scanner;

public class TemperatureConvertFtoCelsQuestion10 {

public static void main(String[] args) {
		
		Scanner input = new Scanner (System.in);
		double farn, cels;
		
		System.out.print("Enter Fahrenheit Temperature = ");
		farn = input.nextDouble();
		cels = (farn -32)*5/9;
		
		System.out.println("So in Celsious : "+ cels);
	}
}