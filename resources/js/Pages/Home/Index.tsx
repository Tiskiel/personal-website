import HomeLayout from '@/Layouts/HomeLayout';
import { ReactNode } from 'react';

function Index() {
  return 'Hello world';
}

Index.layout = (page: ReactNode) => <HomeLayout>{page}</HomeLayout>;
export default Index;
