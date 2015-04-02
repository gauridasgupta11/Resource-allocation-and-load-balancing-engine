package com.billingmodule.resources;

public class ResourceMemory implements Resources{
	
	private final int perUsageAmt;
	private int usage;
	
	public ResourceMemory(){
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
