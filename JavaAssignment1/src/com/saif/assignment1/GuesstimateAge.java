package com.saif.assignment1;

import java.util.Random;
public class GuesstimateAge {

	public static void main(String[] args) {
		guesstimateAge(); 
	}
	public static void guesstimateAge(){
		String[] studentName = {"Saif", "Rahat", "Salman", "Harisul", "Rezwan"};
		
		for(String temp : studentName) {
			Random random = new Random();
			int randomAge = random.nextInt(35-25)+25;
			System.out.println(temp + " - " + "Guessed Age : "+ randomAge);
			
		}
	}
}

