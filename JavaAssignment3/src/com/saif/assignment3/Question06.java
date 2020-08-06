package com.saif.assignment3;

public class Question06 {

	static int emptyspace = 0;
	static int digits = 0;
	static String text = "a quick brown fox jumps over the lazy dog";
	static String vowel = "aeiou";
	static int vowelcount;
	static int consonant;

	public static void main(String[] args) {
		
		for (int i = 0; i < text.length(); i++){
			if(text.charAt(i) != ' '){
				digits++;
				
				 if (text.charAt(i) == 'a'|| text.charAt(i) == 'e' || text.charAt(i) == 'i' 
						 || text.charAt(i) == 'o' || text.charAt(i) == 'u') {
					vowelcount++;
						}
						
						else {
							consonant++;
						}
					}
			else {
				emptyspace++;
			}
						
		}
		System.out.println("Total digits are: " +digits);
		System.out.println("Total Emply Spaces are: " + emptyspace);
		System.out.println("Total vowels are: " + vowelcount);
		System.out.println("Total Consonants are: " + consonant);
	}

}

