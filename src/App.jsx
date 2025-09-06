import HomePage from './HomePage'
import SkillsPage from './SkillsPage'
import ProjectsPage from './ProjectsPage.jsx'
import Footer from './Footer.jsx'
export default function App() {
  return (
    <div className="bg-black flex items-center justify-center p-5">
      <div className=" ">
        <HomePage />
        <SkillsPage />
        <ProjectsPage/>
        <Footer/>
      </div>
    </div>
  )
}