package com.stream.app.stream_backend.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stream.app.stream_backend.entitie.Video;

@Repository
public interface VideoRepository extends JpaRepository<Video, String>{

	Optional<Video> findByTitle(String title);
	
	//query methds
	
	//native 
	
	//criteria API
}
