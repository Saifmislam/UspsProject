package com.saif.assignment4;

public class DuplicateValue {

	void printDuplicateValue(int arr[], int size)  
    { 
        int count[] = new int[size]; 
        int i; 
  
        System.out.println("Duplicate Value are : "); 
        for (i = 0; i < size; i++)  
        { 
            if (count[arr[i]] == 1) 
                System.out.print(arr[i] + " "); 
            else
                count[arr[i]]++; 
        } 
    } 
  
    public static void main(String[] args) 
    { 
    	DuplicateValue duplicate = new DuplicateValue(); 
        int arr[] = {4, 2, 4, 5, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8, 9, 1}; 
        int arr_size = arr.length; 
        duplicate.printDuplicateValue(arr, arr_size); 
    } 
} 

