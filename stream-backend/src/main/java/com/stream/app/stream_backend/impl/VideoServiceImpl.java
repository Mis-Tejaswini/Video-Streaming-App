package com.stream.app.stream_backend.impl;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.stream.app.stream_backend.Services.VideoServices;
import com.stream.app.stream_backend.entitie.Video;
import com.stream.app.stream_backend.repositories.VideoRepository;

import jakarta.annotation.PostConstruct;

@Service
public class VideoServiceImpl implements VideoServices {

	@Value("${files.video}")
	String DIR;
	
	
	private VideoRepository videoRepository;
	
	public VideoServiceImpl(VideoRepository videoRepository) {
		this.videoRepository = videoRepository;
	}

	@PostConstruct
	public void init() {
		File file = new File(DIR);
		if(!file.exists()) {
			file.mkdir();
			System.out.println("Folde Created");
		}else {
			System.out.println("Folder Already Created");
		}
	} 
	
	@Override
	public Video save(Video video, MultipartFile file) {
		// TODO Auto-generated method stub
		
		try {
		String filename = file.getOriginalFilename();  // it will return a original file name 
		String contentType= file.getContentType();
		InputStream inputStream = file.getInputStream();
		
		
		
	// file path 	
	String cleanFileName= StringUtils.cleanPath(filename);
	
	//folder path: create
	String cleanFolder = StringUtils.cleanPath(DIR);
	
	//folder path: with file name and type 
	 Path path = Paths.get(cleanFolder, cleanFileName);
	
	System.out.println(contentType);
	System.out.println(path);

// copy file to the folder 
Files.copy(inputStream, path, StandardCopyOption.REPLACE_EXISTING);

	//video metadata 
	video.setContentType(contentType); 
	video.setFilePath(path.toString());
	
		//meta data save 
	
	 return  videoRepository.save(video);
	
		}catch(IOException e) {
			e.printStackTrace();
			return null;
		}
		
	}

	@Override
	public Video get(String VideoId) {
		// TODO Auto-generated method stub
		Video video = videoRepository.findById(VideoId).orElseThrow(()-> new RuntimeException("Video  not found."));
		return video;
	}

	@Override
	public Video getByTitile(String title) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Video> getAll() {
		// TODO Auto-generated method stub
		
		return videoRepository.findAll();
	}

	
}
