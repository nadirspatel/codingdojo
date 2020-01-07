class ProjectTest{
	public static void main(String[] args){
		Project p1 = new Project();
		Project first = new Project("First", "It's my first project");
		Project internet = new Project("The Internet", "it's this great new idea I just had");
		int buggy = 999;

		System.out.println(p1.elevatorPitch());
		System.out.println(first.elevatorPitch());
		System.out.println(internet.elevatorPitch());
		Portfolio port1 = new Portfolio();
		port1.addProject(first);
		port1.addProject(buggy);
	}
}