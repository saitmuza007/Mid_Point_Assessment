import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ResumeService from '../service/ResumeService';

export default class AddResume extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:'',
            sreet:'',
            city:'',
            phone:'',
            email:'',
            twitter:'',
            github:'',
            linkedin:'',
            exp1:'',
            exp2:'',
            exp3:'',
            exp:'',
            degree:'',
            sslc:'',
            hslc:'',
            crnt_job:'',
            about:'',
            url:'',
            cert1:'',
            cert2:'',
            cert3:'',
            cert4:'',
            cert5:'',
            cert6:'',
            internship:'',
            accomplishments:''
         
          
        }
        this.changeName=this.changeName.bind(this);
        this.changeAbout=this.changeAbout.bind(this);
        this.changeAccomplishments=this.changeAccomplishments.bind(this);
        this.changeAddress_Street=this.changeAddress_Street.bind(this);
        this.changeCurrent_Job=this.changeCurrent_Job.bind(this);
        this.changeDegree=this.changeDegree.bind(this);
        this.changeEmail=this.changeEmail.bind(this);
        this.changeExperience=this.changeExperience.bind(this);
        this.changeExpertise1=this.changeExpertise1.bind(this);
        this.changeExpertise2=this.changeExpertise2.bind(this);
        this.changeExpertise3=this.changeExpertise3.bind(this);
        this.changeGithub=this.changeGithub.bind(this);
        this.changeHslc=this.changeHslc.bind(this);
        this.changeInternships=this.changeInternships.bind(this);
        this.changeLinkedin=this.changeLinkedin.bind(this);
        this.changePhone=this.changePhone.bind(this);
        this.changeSslc=this.changeSslc.bind(this);
        this.changeTwitter=this.changeTwitter.bind(this);
        this.saveResume=this.saveResume.bind(this);
        this.changeUrl=this.changeUrl.bind(this); 
        this.changeCert1=this.changeCert1.bind(this);
        this.changeCert2=this.changeCert2.bind(this);
        this.changeCert3=this.changeCert3.bind(this);
        this.changeCert4=this.changeCert4.bind(this);
        this.changeCert5=this.changeCert5.bind(this);
        this.changeCert6=this.changeCert6.bind(this);

        

    
       
    }

    saveResume=(e)=>
    {
        e.preventDefault();
        let resumes = {name: this.state.name,sreet:this.state.sreet,city:this.state.sreet,phone :this.state.phone ,email:this.state.email,twitter:this.state.twitter
        ,github:this.state.github,linkedin:this.state.linkedin,exp1:this.state.exp1,exp2:this.state.exp2,exp3:this.state.exp3,degree:this.state.degree
    ,sslc:this.state.sslc,hslc:this.state.hslc,crnt_job:this.state.crnt_job,about:this.state.about,exp:this.state.exp,internship:this.state.internship,accomplishments:this.state.accomplishments,url:this.state.url,cert1:this.state.cert1,cert2:this.state.cert2,cert3:this.state.cert3,cert4:this.state.cert4,cert5:this.state.cert5,cert6:this.state.cert6};
        console.log('Resume => ' + JSON.stringify(resumes));
        ResumeService.createResume(resumes).then(res=>{
            this.props.history.push('/resume');
        });
    }    
   
changeName=(event)=>
{
    this.setState({name:event.target.value})
}

changeAbout=(event)=>
{
    this.setState({about:event.target.value})
}
changeAccomplishments=(event)=>
{
    this.setState({accomplishments:event.target.value})
}
changeAddress_Street=(event)=>
{
    this.setState({sreet:event.target.value})
}
changeCurrent_Job=(event)=>
{
    this.setState({crnt_job:event.target.value})
}
changeDegree=(event)=>
{
    this.setState({degree:event.target.value})
}
changeEmail=(event)=>
{
    this.setState({email:event.target.value})
}
changeExperience=(event)=>
{
    this.setState({exp:event.target.value})
}
changeExpertise1=(event)=>
{
    this.setState({exp1:event.target.value})
}
changeExpertise2=(event)=>
{
    this.setState({exp2:event.target.value})
}
changeExpertise3=(event)=>
{
    this.setState({exp3:event.target.value})
}
changeGithub=(event)=>
{
    this.setState({github:event.target.value})
}

changeHslc=(event)=>
{
    this.setState({hslc:event.target.value})
}
changeCert1=(event)=>
{
    this.setState({cert1:event.target.value})
}
changeCert2=(event)=>
{
    this.setState({cert2:event.target.value})
}
changeCert3=(event)=>
{
    this.setState({cert3:event.target.value})
}
changeCert4=(event)=>
{
    this.setState({cert4:event.target.value})
}
changeCert5=(event)=>
{
    this.setState({cert5:event.target.value})
}
changeCert6=(event)=>
{
    this.setState({cert6:event.target.value})
}
changeInternships=(event)=>
{
    this.setState({internship:event.target.value})
}
changeLinkedin=(event)=>
{
    this.setState({linkedin:event.target.value})
}
changePhone=(event)=>
{
    this.setState({phone:event.target.value})
}

changeSslc=(event)=>
{
    this.setState({sslc:event.target.value})
}
changeTwitter=(event)=>
{
    this.setState({twitter:event.target.value})
}
changeAddress_City=(event)=>
{
    this.setState({city:event.target.value})
}
changeUrl=(event)=>
{
    this.setState({url:event.target.value})
}
cancel(){
    this.props.history.push('/resume');
}


  render() {
    return (
      <div>
          <br />

          <div className='container' >
                   <br />
                   <br />
                   
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                <div className = "card-body">
                                <h2>Add Details</h2>
                                <br />
                                    <form>
                                        <div className = "form-group">
                                            
                                            <input   placeholder="Name" name="Name" className="form-control"  value={this.state.name} onChange={this.changeName}
                                               />
                                        </div>

                                        <div className = "form-group">
                                            
                                            <input   placeholder="Profile Image" name="Profile Image" className="form-control"  value={this.state.url} onChange={this.changeUrl}
                                               />
                                        </div>
                                       
                                        <div className = "form-group">
                                            
                                            <input   placeholder="Email" name="Email" className="form-control"  value={this.state.email} onChange={this.changeEmail}
                                               />
                                        </div>
                                        <div className = "form-group">
                                           
                                            <input placeholder="Phone Number" name="PhoneNumber" className="form-control" value={this.state.phone} onChange={this.changePhone} 
                                               />
                                        </div>
                                        <div className = "form-group">
                                          
                                            <input placeholder="Designation" name="Designation" className="form-control" value={this.state.crnt_job} onChange={this.changeCurrent_Job}
                                                 />
                                        </div>
                                        <div className = "form-group">
                                          
                                            <input placeholder="Adress Street" name="Adress Street" className="form-control" value={this.state.sreet} onChange={this.changeAddress_Street} 
                                                 />
                                        </div>
                                        <div className = "form-group">
                                          
                                            <input placeholder="Adress City" name="Adress City" className="form-control" value={this.state.city} onChange={this.changeAddress_City}
                                                 />
                                        </div>
                                        <div className = "form-group">
                                          
                                          <input placeholder="Twitter Link" name="Twitter Link" className="form-control" value={this.state.twitter} onChange={this.changeTwitter}
                                               />
                                      </div>
                                      <div className = "form-group">
                                          
                                          <input placeholder="Github Repo" name="Github Repo" className="form-control" value={this.state.github} onChange={this.changeGithub}
                                               />
                                      </div>
                                      <div className = "form-group">
                                          
                                          <input placeholder="Linkedin Link" name="Linkedin Link" className="form-control" value={this.state.linkedin} onChange={this.changeLinkedin}
                                               />
                                      </div>
                                      <div className = "form-group">
                                          
                                          <input placeholder="Expertise Skills" name="Expertise Skills" className="form-control" value={this.state.exp1} onChange={this.changeExpertise1}
                                               />
                                      </div>

                                      <div className = "form-group">
                                          
                                          <input placeholder="Expertise Skills" name="Expertise Skills" className="form-control" value={this.state.exp2} onChange={this.changeExpertise2}
                                               />
                                      </div>

                                      <div className = "form-group">
                                          
                                          <input placeholder="Expertise Skills" name="Expertise Skills" className="form-control" value={this.state.exp3} onChange={this.changeExpertise3}
                                               />
                                      </div>
                                      <div className = "form-group">
                                          
                                          <input placeholder="Education Degree" name="Education Degree" className="form-control" value={this.state.degree} onChange={this.changeDegree}
                                               />
                                      </div>
                                      <div className = "form-group">
                                          
                                          <input placeholder="Education 12th" name="Education 12th" className="form-control" value={this.state.sslc} onChange={this.changeSslc}
                                               />
                                      </div>
                                      <div className = "form-group">
                                          
                                          <input placeholder="Education 10th" name="Education 10th" className="form-control" value={this.state.hslc} onChange={this.changeHslc}
                                               />
                                      </div>
                                      <div className = "form-group">
                                          
                                          <input placeholder="Certification" name="Certification" className="form-control" value={this.state.cert1} onChange={this.changeCert1}
                                               />
                                      </div>
                                      <div className = "form-group">
                                          
                                          <input placeholder="Certification" name="Certification" className="form-control" value={this.state.cert2} onChange={this.changeCert2}
                                               />
                                      </div>
                                      <div className = "form-group">
                                          
                                          <input placeholder="Certification" name="Certification" className="form-control" value={this.state.cert3} onChange={this.changeCert3}
                                               />
                                      </div>
                                      <div className = "form-group">
                                          
                                          <input placeholder="Certification" name="Certification" className="form-control" value={this.state.cert4} onChange={this.changeCert4}
                                               />
                                      </div>
                                      <div className = "form-group">
                                          
                                          <input placeholder="Certification" name="Certification" className="form-control" value={this.state.cert5} onChange={this.changeCert5}
                                               />
                                      </div>
                                      <div className = "form-group">
                                          
                                          <input placeholder="Certification" name="Certification" className="form-control" value={this.state.cert6} onChange={this.changeCert6}
                                               />
                                      </div>

 
                                      <div class="form-group">
                                            <textarea class="form-control"  placeholder="About Me" name="About Me" value={this.state.about} onChange={this.changeAbout} rows="3"></textarea>
                                      </div>
                                      <div class="form-group">
                                            <textarea class="form-control"  placeholder="Experience" name="Experience" value={this.state.exp} onChange={this.changeExperience} rows="3"></textarea>
                                      </div>
                                      <div class="form-group">
                                            <textarea class="form-control"  placeholder="Internships" name="Internships" value={this.state.internships} onChange={this.changeInternships} rows="3"></textarea>
                                      </div>
                                      <div class="form-group">
                                            <textarea class="form-control"  placeholder="Accomplishments" name="Accomplishments" value={this.state.accomplishments} onChange={this.changeAccomplishments} rows="3"></textarea>
                                      </div>


                                      <button className="btn btn-success" onClick={this.saveResume}>Save</button>
                                        <button className="btn btn-danger"  onClick={this.cancel.bind(this)}  style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
        
        


      </div>
    )
  }
}
