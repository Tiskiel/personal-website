import HomeLayout from '@/Layouts/HomeLayout';
import { ReactNode } from 'react';
import ProjectShow from './Components/ProjectShow';

function Index() {
  return (
    <div className="w-full grid grid-cols-1 gap-4  md:grid-cols-[2fr,1fr] xl:grid-cols-[2fr,1fr]">
      <main className="bg-gradient-to-r from-indigo-200 rounded-md p-4 flex flex-col justify-center items-center min-h-screen md:col-span-2">
        {/* <img src='images/pngegg.png' alt='brainstorm' className='self-start'/> */}
        <div className="max-w-xl w-full self-end">
          <p className="text-lg mb-4">
            Following a career change, I turned towards web-oriented programming training. It may seem quite simple, but
            I redirected myself to this sector because I have always loved video games and the world of computers.
          </p>

          <p className="text-lg mb-4">
            During my training, I had the opportunity to discover several languages, such as C#, Javascript, Typescript,
            Kotlin, and Java. I also got to explore frameworks like React, Angular, and Express, to name a few.
          </p>

          <p className="text-lg mb-4">
            Afterward, I was fortunate to be hired by Gitscape, where I am still currently working. In this young
            company, I was able to discover a new language and a new framework.
          </p>

          <p className="text-lg mb-4">
            As I write this emphasis, my tech stack comprises Laravel, Inertia, React, and Typescript, and I am
            experiencing the joys of devops and GitHub Actions.
          </p>

          <p className="text-lg">Thank you for taking the time to read me.</p>
        </div>
      </main>

      <aside className="bg-gradient-to-r from-indigo-200 to-indigo-50 rounded-md p-4 flex flex-col justify-center">
        <p className="text-black text-lg mb-4">
          I am someone passionate and curious. I really enjoy learning and tackling challenges.
        </p>

        <p className="text-black text-lg mb-4">
          I love working both in a team and solo, with a slight preference for the team to stay connected.
        </p>

        <p className="text-black text-lg">
          Outside of coding, I love strolling in nature and exploring new horizons with my family.
        </p>
      </aside>
    </div>
  );
}

Index.layout = (page: ReactNode) => <HomeLayout>{page}</HomeLayout>;
export default Index;
