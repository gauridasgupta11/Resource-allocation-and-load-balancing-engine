package com.billingmodule.resources;

public class ResourceStorage implements Resources{

	private final int perUsageAmt;
	private int usage;

	public ResourceStorage(){
		perUsageAmt = 2;
	}

	
	public int getUsage() {
		return usage;
	}

	public void setUsage(int usage) {
		this.usage = usage;
	}

	
	public int getPerUsageAmt() {
		return perUsageAmt;
	}

}
