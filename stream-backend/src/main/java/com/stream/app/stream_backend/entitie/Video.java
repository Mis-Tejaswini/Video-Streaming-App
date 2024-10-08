package com.stream.app.stream_backend.entitie;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="yt_videos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Video {

	@Id
	private String videoId;
	private String title;
	private String description;
	private String ContentType;
	private String filePath;
	
//	@ManyToOne
//	private Course course;

}
