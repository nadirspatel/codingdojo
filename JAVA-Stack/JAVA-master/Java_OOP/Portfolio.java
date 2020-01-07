import java.util.ArrayList;

class Portfolio{
	private ArrayList<Project> projects;

	public Portfolio(){}

	public void addProject(Project project){
		projects.add(project);
	}

	public ArrayList<Project> getAllProjects(){
		return projects;
	}
}
