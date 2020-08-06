package com.saif.assignment3;

public class Question05 {

	public static void main(String[] args) {
		dingdongMethod();
	}

	public static void dingdongMethod(){
		for (int i=1;i<= 50; i++){
			if (i % 3 == 0){
				if (i % 5 == 0){
					System.out.println("DingDong");
				} else {
					System.out.println("Ding");
				}
				} else if( i % 5 == 0){
					System.out.println("Dong");
				}
				
				else {
					System.out.println(i);
					
		}
				
	}
		
  }
}
