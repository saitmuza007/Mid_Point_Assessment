import axios  from 'axios';
const Resume_API_BASE_URL="http://localhost:8080/api/v1/resume"
class ResumeService
{


    getResume()
    {
        return axios.get(Resume_API_BASE_URL);
    }
    createResume(resume)
    {
        return axios.post(Resume_API_BASE_URL,resume);
    }
    getResumeById(resumeId){
        return axios.get(Resume_API_BASE_URL + '/' + resumeId);
    }
    updateResume(resume, resumeId){
        return axios.put(Resume_API_BASE_URL + '/' + resumeId, resume);
    }

    
}

export default new ResumeService;