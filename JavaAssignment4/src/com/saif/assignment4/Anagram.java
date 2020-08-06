package com.saif.assignment4;

import java.util.Arrays;

public class Anagram {

		public static void main(String[] args) {
		String s1="asdaas" ;
		String s2 = "sadaas";

		char arr1[] = s1.toCharArray();
		char arr2[] = s2.toCharArray();
		Arrays.sort(arr1);
		Arrays.sort(arr2);
		String str1 = new String(arr1);
		String str2 = new String(arr2);
		if(str1.equals(str2))
		System.out.println("true");
		else
		System.out.println("false");

		}
		
}

//One of the easiest way to check if two Strings are an anagram of each other.
//is to take their character array, sort them and check if they are equal 
//If sorted character arrays are equal then both String are an anagram of each other.
