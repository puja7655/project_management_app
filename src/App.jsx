import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectsSideBar";
import NoProjectSelected from "./components/NoProjectSelected"
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [] //Array of object of project details and id 
  })

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  //deals with adding a new project
  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  
  function handleCancelAddProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects}></ProjectSidebar>
      {content}
    </main>
  );
}

export default App;
