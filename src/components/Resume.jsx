import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ResumeService from '../service/ResumeService';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

export default class Resume extends Component {
  constructor(props)
  {
      super(props)
      this.state={
          resumes:[]
        
      }
     
     
     this.addResume=this.addResume.bind(this);
     this.updateResume=this.updateResume.bind(this);
     
  }
  addResume()
  {
    this.props.history.push('/add-resume')
  }
  componentDidMount()
  {
    ResumeService.getResume().then((res) =>
    {
   this.setState({resumes:res.data});
    });
  }
  updateResume(id)
  {
    this.props.history.push(`/update-resume/${id}`);  
  }

  render() {
    return (
      <div>  
        
      
           
      <div class="rela-block page">
        
      <div class="rela-block top-bar">
          <div class="caps name"><div class="abs-center">{this.state.resumes.map(
                                        resu => <h1 style={{fontSize:"35px"}}>{resu.name}</h1>
                                        )}</div>
                                        
                                        <button className="btn btn-primary" style={{marginLeft:"570px",marginTop:"-220px",borderRadius:"25px"}} onClick={this.addResume}><img style={{height:"30px",}} src="https://cdn4.iconfinder.com/data/icons/buno-info-signs/32/__plus_add_new-74-256.png"></img></button>
                   
                   <button className="btn btn-danger" onClick={()=>this.updateResume(this.state.resumes.map(resus=>(resus.id)))} style={{marginLeft:"720px",marginTop:"-340px",borderRadius:"25px"}}><img style={{height:"30px"}} src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_edit-writing-content-editing-256.png"></img></button>
                  
                 
                                        </div>
      </div>
      <div class="side-bar">
        
          <div class="mugshot">
              <div class="logo">
                 <img src={this.state.resumes.map(resus=>resus.url)}  style={{width:"100px;",height:"200px"}}alt="" />
                 {/*<p class="logo-text">kj</p>*/}
              </div>
              
          </div>
          <p class="rela-block social address">{this.state.resumes.map(resus=><p>{resus.sreet}</p>)}</p>
          <p  class="rela-block social city">{this.state.resumes.map(resus=><p>{resus.city}</p>)}</p>
          <p  class="rela-block social phone">{this.state.resumes.map(resus=><p>{resus.phone}</p>)}</p>
          <p  class="rela-block social email">{this.state.resumes.map(resus=><p>{resus.email}</p>)}</p><br/>
          <p class="rela-block social twitter"><a href="https://twitter.com/login" style={{textDecoration:"none",color:"#fff"}}>Twitter Connect</a></p>
          <p class="rela-block social pinterest"><a href="https://github.com/saitmuza007" style={{textDecoration:"none",color:"#fff"}}>Github Repo</a></p>
          <p class="rela-block social linked-in"><a href="https://www.linkedin.com/in/muzammil-sait-83566319a/" style={{textDecoration:"none",color:"#fff"}}>Linked-in Connect</a></p>
          <p class="rela-block caps side-header">Expertise</p>
          <p class="rela-block list-thing">{
          this.state.resumes.map(resus=><p>{resus.exp1}</p>)
          }</p>
          <p class="rela-block list-thing">{
          this.state.resumes.map(resus=><p>{resus.exp2}</p>)
          }</p>
          <p class="rela-block list-thing">{
          this.state.resumes.map(resus=><p>{resus.exp3}</p>)
          }</p>
          <p class="rela-block caps side-header">Education</p>
          <p class="rela-block list-thing">{
          this.state.resumes.map(resus=><p>{resus.degree}</p>)
          }</p>
          <p class="rela-block list-thing">{
          this.state.resumes.map(resus=><p>{resus.sslc}</p>)
          }</p>
          <p class="rela-block list-thing">{
          this.state.resumes.map(resus=><p>{resus.hslc}</p>)
          }</p>
          
      </div>
      <div class="rela-block content-container">
          <h3 class="rela-block caps title">{this.state.resumes.map(
            resus=><h3>{resus.crnt_job}</h3>
          )}</h3>
          <div class="rela-block separator"></div>
          <div class="rela-block caps greyed">About Me</div>
          <p class="long-margin"  style={{textAlign:"justify"}}>{
          this.state.resumes.map(resus=><p>{resus.about}</p>)
          }</p>
          <div class="rela-block caps greyed">Experience</div>
          
          <p class="justified"  style={{textAlign:"justify"}}>{
          this.state.resumes.map(resus=><p>{resus.exp}</p>)
          }</p>

          <br />
          
          <h3>  <div class="rela-block caps greyed" >Internships</div></h3>
      
          <p class="justified"  style={{textAlign:"justify"}}>{
          this.state.resumes.map(resus=><p>{resus.internship}</p>)
          }</p>
          <br />
          <h3>  <div class="rela-block caps greyed">Accomplishments</div></h3>
         
          <p class="justified">{this.state.resumes.map(
            resus=><p>{resus.accomplishments}</p>
          )}</p>
          <br />
          <h3>  <div class="rela-block caps greyed">Certifications</div></h3>
         
        <div className='row' >
          <div className='col-lg-6'>
            <ul>
              <li  class="justified" style={{textAlign:"justify"}}>{this.state.resumes.map(
            resus=>resus.cert1)}</li>
              <li  class="justified" style={{textAlign:"justify"}}>{this.state.resumes.map(
            resus=>resus.cert2)}</li>
              <li  class="justified" style={{textAlign:"justify"}}>{this.state.resumes.map(
            resus=>resus.cert3)}
              </li>
            </ul>
          </div>
          <div className='col-lg-6'>
            <ul>
              <li  class="justified" style={{textAlign:"justify"}}>{this.state.resumes.map(
            resus=>resus.cert4)}</li>
              <li  class="justified" style={{textAlign:"justify"}}>{this.state.resumes.map(
            resus=>resus.cert5)}</li>
              <li  class="justified" style={{textAlign:"justify"}}>{this.state.resumes.map(
            resus=>resus.cert6)}
              </li>
            </ul>
          </div>
          
        </div>
          
      
      </div>
     

                 
                   
               
     
      
  </div>
  

        
      </div>
    )
  }
}
