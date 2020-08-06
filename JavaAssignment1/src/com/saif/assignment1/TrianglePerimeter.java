package com.saif.assignment1;

public class TrianglePerimeter {

	public static void main(String[] args) {
		perimeterFunction();

	}
	
	private static void perimeterFunction() {
		int sideA = 5;
		int sideB = 7;
		int sideC = 11;
		int perimeter = sideA + sideB + sideC;
		System.out.println("The perimeter of triangle is : " + perimeter + " inches");
		
	}
}
