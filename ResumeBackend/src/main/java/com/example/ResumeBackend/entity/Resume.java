package com.example.ResumeBackend.entity;

import org.w3c.dom.Text;

import javax.persistence.*;
import javax.transaction.Transactional;

@Entity
@Table(name="resumes")
@Transactional
public class Resume {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name="name",nullable = false)
    private String name;
    @Column(name="street",nullable = false)
    private String sreet;
    @Column(name="city",nullable = false)
    private String city;
    @Column(name="phone",nullable = false)
    private Long phone;
    @Column(name="email",nullable = false)
    private String email;
    @Column(name="twitter",nullable = false)
    private String twitter;
    @Column(name="github",nullable = false)
    private String github;
    @Column(name="linkedin",nullable = false)
    private String linkedin;
    @Column(name="exp1",nullable = false)
    private String exp1;
    @Column(name="exp2",nullable = false)
    private String exp2;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Column(name="exp3",nullable = false)
    private String exp3;
    @Column(name="img",nullable = false)
    private String url;
    @Column(name="cert1",nullable = false)
    private String cert1;
    @Column(name="cert2",nullable = false)
    private String cert2;
    @Column(name="cert3",nullable = false)
    private String cert3;
    @Column(name="cert4",nullable = false)
    private String cert4;
    @Column(name="cert5",nullable = false)
    private String cert5;

    public String getCert1() {
        return cert1;
    }

    public void setCert1(String cert1) {
        this.cert1 = cert1;
    }

    public String getCert2() {
        return cert2;
    }

    public void setCert2(String cert2) {
        this.cert2 = cert2;
    }

    public String getCert3() {
        return cert3;
    }

    public void setCert3(String cert3) {
        this.cert3 = cert3;
    }

    public String getCert4() {
        return cert4;
    }

    public void setCert4(String cert4) {
        this.cert4 = cert4;
    }

    public String getCert5() {
        return cert5;
    }

    public void setCert5(String cert5) {
        this.cert5 = cert5;
    }

    public String getCert6() {
        return cert6;
    }

    public void setCert6(String cert6) {
        this.cert6 = cert6;
    }

    @Column(name="cert6",nullable = false)
    private String cert6;

    public Resume()
    {

    }

    public Resume(String name,String cert1,String cert2,String cert3,String cert4,String cert5,String cert6, String sreet, String city, Long phone, String email, String twitter, String github, String linkedin, String exp1, String exp2, String exp3, String degree, String sslc, String hslc, String crnt_job, String about, String exp, String internship, String accomplishments,String url) {
        super();
        this.name = name;
        this.sreet = sreet;
        this.city = city;
        this.phone = phone;
        this.email = email;
        this.twitter = twitter;
        this.github = github;
        this.linkedin = linkedin;
        this.exp1 = exp1;
        this.exp2 = exp2;
        this.exp3 = exp3;
        this.degree = degree;
        this.sslc = sslc;
        this.hslc = hslc;
        this.crnt_job = crnt_job;
        this.about = about;
        this.cert1=cert1;
        this.cert2=cert2;
        this.cert3=cert3;
        this.cert4=cert4;
        this.cert5=cert5;
        this.cert6=cert6;
        this.exp = exp;
        this.url=url;
        this.internship = internship;
        this.accomplishments = accomplishments;
    }
    @Column(name="degree",nullable = false)
    private String degree;
    @Column(name="sslc",nullable = false)
    private String sslc;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSreet() {
        return sreet;
    }

    public void setSreet(String sreet) {
        this.sreet = sreet;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Long getPhone() {
        return phone;
    }



    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTwitter() {
        return twitter;
    }

    public void setTwitter(String twitter) {
        this.twitter = twitter;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getExp1() {
        return exp1;
    }

    public void setExp1(String exp1) {
        this.exp1 = exp1;
    }

    public String getExp2() {
        return exp2;
    }

    public void setExp2(String exp2) {
        this.exp2 = exp2;
    }

    public String getExp3() {
        return exp3;
    }

    public void setExp3(String exp3) {
        this.exp3 = exp3;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getSslc() {
        return sslc;
    }

    public void setSslc(String sslc) {
        this.sslc = sslc;
    }

    public String getHslc() {
        return hslc;
    }

    public void setHslc(String hslc) {
        this.hslc = hslc;
    }

    public String getCrnt_job() {
        return crnt_job;
    }

    public void setCrnt_job(String crnt_job) {
        this.crnt_job = crnt_job;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getExp() {
        return exp;
    }

    public void setExp(String exp) {
        this.exp = exp;
    }

    public String getInternship() {
        return internship;
    }

    public void setInternship(String internship) {
        this.internship = internship;
    }

    public String getAccomplishments() {
        return accomplishments;
    }

    public void setAccomplishments(String accomplishments) {
        this.accomplishments = accomplishments;
    }


    @Column(name="hslc",nullable = false)
    private String hslc;
    @Column(name="currentjob",nullable = false)
    private String crnt_job;
    @Column(name="about",nullable = false,length = 2500,columnDefinition ="LONGTEXT")
    private String about;
    @Column(name="experience",nullable = false,length = 2500,columnDefinition ="LONGTEXT")
    private String exp;
    @Column(name="internships",nullable = false,length = 2500,columnDefinition ="LONGTEXT")
    private String internship;
    @Lob
    @Column(name="accomplishments",nullable = false,length = 2500,columnDefinition ="LONGTEXT" )
    private String accomplishments;



}
