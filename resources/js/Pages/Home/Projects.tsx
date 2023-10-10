import HomeLayout from '@/Layouts/HomeLayout';
import { ReactNode } from 'react';

function Projects() {
  return <div>Projects</div>;
}

Projects.layout = (page: ReactNode) => <HomeLayout>{page}</HomeLayout>;

export default Projects;
