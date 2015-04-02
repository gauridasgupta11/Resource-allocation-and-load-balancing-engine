package com.billingmodule.calculate;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.billingmodule.resources.ResourceCPU;
import com.billingmodule.resources.ResourceMemory;
import com.billingmodule.resources.ResourceStorage;
import com.database.connection.MyDBConnection;
import com.database.connection.SQLQueries;

public class GenerateBill {

	private Connection conn;
	private static ResourceCPU CPUresource;
	private static ResourceMemory Memresource;
	private static ResourceStorage Storageresource;


	public GenerateBill() {
		this.conn = MyDBConnection.getConnection();;
		CPUresource = new ResourceCPU();
		Memresource = new ResourceMemory();
		Storageresource = new ResourceStorage();
	}

	public int getBill(int instanceID) {
		int amount = 0;
		GenerateBill gb = new GenerateBill();
		gb.getResources(instanceID);

		amount = CPUresource.getPerUsageAmt()*CPUresource.getUsage() + 
				Storageresource.getPerUsageAmt()*Storageresource.getUsage() + 
				Memresource.getPerUsageAmt()*Memresource.getUsage();
		return amount;
	}

	public  void getResources(int instanceID) {
		try {
			PreparedStatement ps = conn.prepareStatement(SQLQueries.SQL_GET_RESOURCES);
			ps.setInt(0, instanceID);
			ResultSet rs = ps.executeQuery();
			if(rs != null) {
				CPUresource.setUsage(rs.getInt("CPU"));
				Memresource.setUsage(rs.getInt("Memory"));
				Storageresource.setUsage(rs.getInt("Storage"));
				//Deviceresource.setUsage(rs.getInt("Device"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} 
	}
}
