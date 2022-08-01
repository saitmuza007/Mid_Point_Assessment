package com.example.ResumeBackend.controller;


import com.example.ResumeBackend.entity.Resume;
import com.example.ResumeBackend.exception.ResourceNotFoundException;
import com.example.ResumeBackend.repository.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class ResumeController {
    @Autowired

    private ResumeRepository resumeRepository;

    @GetMapping("/resume")
    public List<Resume> getAllResume()
    {

        return resumeRepository.findAll();
    }

    @PostMapping("/resume")
    public Resume createResume(@RequestBody Resume resume)
    {
        return resumeRepository.save(resume);
    }

    @GetMapping("/resume/{id}")
    public ResponseEntity<Resume> getResumeById(@PathVariable Long id) {
        Resume resume = resumeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Resume not exist with id :" + id));
        return ResponseEntity.ok(resume);
    }

    // update employee rest api

    @PutMapping("/resume/{id}")
    public ResponseEntity<Resume> updateResume(@PathVariable Long id, @RequestBody Resume resumeDetails){
        Resume resume = resumeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Resume not exist with id :" + id));
        resume.setEmail(resumeDetails.getEmail());
        resume.setAbout(resumeDetails.getAbout());
        resume.setName(resumeDetails.getName());
        resume.setAccomplishments(resumeDetails.getAccomplishments());
        resume.setPhone(resumeDetails.getPhone());
        resume.setSreet(resumeDetails.getSreet());
        resume.setCity(resumeDetails.getCity());
        resume.setEmail(resumeDetails.getEmail());
        resume.setCrnt_job(resumeDetails.getCrnt_job());
        resume.setExp(resumeDetails.getExp());
        resume.setExp1(resumeDetails.getExp1());
        resume.setExp2(resumeDetails.getExp2());
        resume.setExp3(resumeDetails.getExp3());
        resume.setDegree(resumeDetails.getDegree());
        resume.setGithub(resumeDetails.getGithub());
        resume.setHslc(resumeDetails.getHslc());
        resume.setInternship(resumeDetails.getInternship());
        resume.setLinkedin(resumeDetails.getLinkedin());
        resume.setSslc(resumeDetails.getSslc());
        resume.setHslc(resumeDetails.getHslc());
        resume.setUrl(resumeDetails.getUrl());
        resume.setCert1(resumeDetails.getCert1());
        resume.setCert2(resumeDetails.getCert2());
        resume.setCert3(resumeDetails.getCert3());
        resume.setCert4(resumeDetails.getCert4());
        resume.setCert5(resumeDetails.getCert5());
        resume.setCert6(resumeDetails.getCert6());
        Resume updatedResume = resumeRepository.save(resume);
        return ResponseEntity.ok(updatedResume);
    }
}
