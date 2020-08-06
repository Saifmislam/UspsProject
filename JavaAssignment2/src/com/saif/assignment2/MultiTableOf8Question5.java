package com.saif.assignment2;

public class MultiTableOf8Question5 {

	public static void main(String[] args) {
		myMethod();
	}
	public static void myMethod(){
		
		
		for (int row =1; row <=10; row++) {
			for (int col = 8; col <=8; col++){
				int MultiplicationTable = row * col;
				System.out.println(MultiplicationTable + " ");
			}
			System.out.println(" ");
		}
	}
}
