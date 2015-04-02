package com.billingmodule.resources;

public class ResourceCPU implements Resources{
	
	private final int perUsageAmt;
	private int usage;
	
	public int getUsage() {
		return usage;
	}

	public void setUsage(int usage) {
		this.usage = usage;
	}

	public ResourceCPU(){
		perUsageAmt = 2;
	}
	
	public int getPerUsageAmt() {
		return perUsageAmt;
	}

}
