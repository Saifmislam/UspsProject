package com.saif.assignment4;

public class ReverseString2 {
	public static void main(String[] args) 
    { 
        String input = "Hello Bangladesh"; 
        char[] temparray = input.toCharArray(); 
        int left, right=0; 
        right = temparray.length-1; 
  
        for (left=0; left < right ; left++ ,right--) 
        { 
            // Swap values of left and right 
            char temp = temparray[left]; 
            temparray[left] = temparray[right]; 
            temparray[right]=temp; 
        } 
  
        for (char c : temparray) 
            System.out.print(c); 
        System.out.println(); 
    } 
} 