package com.example.ResumeBackend.repository;

import com.example.ResumeBackend.entity.Resume;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeRepository extends JpaRepository<Resume,Long> {
}
