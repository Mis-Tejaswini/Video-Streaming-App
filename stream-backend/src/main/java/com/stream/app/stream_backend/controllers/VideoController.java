package com.stream.app.stream_backend.controllers;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.stream.app.stream_backend.Services.VideoServices;
import com.stream.app.stream_backend.entitie.Video;
import com.stream.app.stream_backend.ppp.CustomMessage;

@RestController
@RequestMapping("/api/v1/videos")
public class VideoController {

	private  VideoServices videoService; 
	
	public VideoController(VideoServices videoService) {
		
		this.videoService = videoService;
	}
	
	//video upload
	@PostMapping
	public ResponseEntity<?> create(
			@RequestParam("file") MultipartFile file,
			@RequestParam("title") String title,
			@RequestParam("description") String description
		){
		
		Video video= new Video();
		video.setTitle(title);
		video.setDescription(description);
		video.setVideoId(UUID.randomUUID().toString());
		
		
		Video saveVideo = videoService.save(video, file);
		
		if(saveVideo != null) {
			
			return ResponseEntity
					.status(HttpStatus.OK)
					.body(video);
		}else {
			return ResponseEntity
					.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(CustomMessage.builder()
							.message("video not uploded")
							.success(false)
							.build()
							);
		}
		
	} 
	
	//stream video 
	//http://localhost:8080/api/v1/videos/stream/236567
	
	@GetMapping("/stream/{VideoId}")
	public ResponseEntity<Resource> stream(
			@PathVariable String VideoId
			){
          		Video video= videoService.get(VideoId);
          		
          	String contentType=	video.getContentType();				
          	String  filePath= video.getFilePath();
          	
          	Resource resource= new FileSystemResource(filePath);
          	
          	if(contentType==null) {
          		
          		contentType="appliction/octet-stream";
          	}
          		return ResponseEntity
          				.ok()
          				.contentType(MediaType.parseMediaType(contentType))
          				.body(resource);
	}
	
	
	//stream video in chunks
	@GetMapping("/stream/range/{videoId}")
	public ResponseEntity<Resource> streamVideoRange(
			@PathVariable String videoId,
			@RequestHeader(value="Range", required=false) String range
			){
		System.out.println(range);
		
		Video video= videoService.get(videoId);
		 Path path = Paths.get(video.getFilePath());
		 
		 Resource resource =new FileSystemResource(path);
		 
		 String contentType = video.getContentType();
		 
		 if(contentType==null) {
			 
			 contentType="application/octet-stream";
		 }
		 
		 //file length
		 
		 long fileLength= path.toFile().length();
		 
		 if(range==null) {
			 return ResponseEntity.ok()
					 .contentType(MediaType.parseMediaType(contentType))
					 .body(resource);
		 }
		 
		 //calculating start and end range 
		 long rangeStart;
		 long rangeEnd;
		 
		String [] ranges=  range.replace("bytes="," ").split("-");
		rangeStart =Long.parseLong(ranges[0]);
		
		if(ranges.length>1) {
			rangeEnd= Long.parseLong(ranges[1]);
		}else {
             rangeEnd= fileLength-1;
		}
		
		if (rangeEnd >fileLength-1) {
			rangeEnd= fileLength-1;
		}
		
		System.out.println("range start:"+rangeStart);
		System.out.println("range end:"+rangeEnd);
		
		//calculaing how much data we have to send
		InputStream  inputStream;
		try {
			
			inputStream= Files.newInputStream(path);
			inputStream.skip(rangeStart);
			
			
		} catch (Exception e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
		long contentLength = rangeEnd - rangeStart+1;
		
		HttpHeaders headers= new HttpHeaders();
		headers.add("Content-Range","bytes="+rangeStart+ "-" +rangeEnd+ "/" + fileLength);
		headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
		headers.add("pragma","nocache");
		headers.add("Expires","0");
		headers.add("X-Content-Type-Options", "nosniff");
		
		headers.setContentLength(contentLength);
		
		return ResponseEntity
				.status(HttpStatus.PARTIAL_CONTENT)
				.headers(headers)
				.contentType(MediaType.parseMediaType(contentType))
				.body(new InputStreamResource(inputStream));
	}
	
	
	 // get All Video
	@GetMapping
	public List<Video> getAll(){
		
		return videoService.getAll();
	}
	
}
