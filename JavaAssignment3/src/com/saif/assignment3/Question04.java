package com.saif.assignment3;

import com.saif.assignment3.support.Parent;

public class Question04 extends Parent {
	public static void main(String[] args) {
		Question04 q4 = new Question04();
		q4.myMethod();
	}

	@Override
	public void myMethod() {
		System.out.println("This is Child");
	}
}