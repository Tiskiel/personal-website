import HomeLayout from '@/Layouts/HomeLayout';
import { ReactNode } from 'react';
import MainSection from './Components/MainSection';

function Index() {
  return <MainSection />;
}

Index.layout = (page: ReactNode) => <HomeLayout>{page}</HomeLayout>;
export default Index;
