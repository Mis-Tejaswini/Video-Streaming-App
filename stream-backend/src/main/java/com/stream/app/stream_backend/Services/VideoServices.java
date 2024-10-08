package com.stream.app.stream_backend.Services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.stream.app.stream_backend.entitie.Video;

public interface VideoServices {

	// save video
	Video save(Video video, MultipartFile file);

	// get video by id
	Video get(String VideoId);

	// get video by title
	Video getByTitile(String title);

	// list of videos
	List<Video> getAll();

}
