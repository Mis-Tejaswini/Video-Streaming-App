package com.stream.app.stream_backend.entitie;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="yt_Courses")
public class Course {

	@Id
	private String Id;
	
	private String title;
	
//	@OneToMany(mappedBy="Course")
//	private List<Video> list= new ArrayList<>();
}
