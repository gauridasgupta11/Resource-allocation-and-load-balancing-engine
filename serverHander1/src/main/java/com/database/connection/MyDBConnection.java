package com.database.connection;

import java.sql.Connection;
import java.sql.DriverManager;

public class MyDBConnection {

	private volatile static Connection connection;

	private MyDBConnection(){		
	}

	public static Connection getConnection() {

		if(connection == null) {
			synchronized (connection) {
				if(connection == null){
					String URL = "jdbc:mysql://localhost/mobileCloud";
					String USER = "root";
					String PASS = "admin";

					try {
						Class.forName("com.mysql.jdbc.Driver");
						connection= DriverManager.getConnection(URL, USER, PASS);
					} catch (Exception e) {
						System.out.println("Exception in getConnection():"+e);
						e.printStackTrace();
					}
				}
			}
		}
		return connection;		
	}
}
