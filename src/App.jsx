import HomePage from './HomePage'
import SkillsPage from './SkillsPage'
import ProjectsPage from './ProjectsPage.jsx'
import Footer from './Footer.jsx'
export default function App() {
  return (
    <div className="bg-black">
      <div className=" ">
        <HomePage />
        <SkillsPage />
        <ProjectsPage/>
        <Footer/>
      </div>
    </div>
  )
}