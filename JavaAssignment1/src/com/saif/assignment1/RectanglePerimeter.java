package com.saif.assignment1;

public class RectanglePerimeter {

	public static void main(String[] args) {
		RectanglePerimeterFunction();

	}
	
	private static void RectanglePerimeterFunction() {
		int length = 13;
		int width = 9;
		int RectanglePerimeter = 2 * (length + width);
		System.out.println("The perimeter of rectangle is : " + RectanglePerimeter + " inches");
	}
}
