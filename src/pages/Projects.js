import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import ProjectsPageContent from "../components/ProjectsPageContent";

export default function Projects() {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
        <div className='mb-5'>
            <NavBar/>
            <ProjectsPageContent/>
        </div>
        <Footer/>
    </div>
  )
}