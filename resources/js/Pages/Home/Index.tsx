import PrimaryButton from '@/Components/PrimaryButton';
import HomeLayout from '@/Layouts/HomeLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shadcn/ui/card';
import { Link } from '@inertiajs/react';
import { GitHubLogoIcon, VercelLogoIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';

function Index() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-[2fr,1fr] xl:grid-cols-[2fr,1fr]">
      <main className="bg-slate-200 rounded-md p-4 flex flex-col justify-center items-center min-h-screen md:col-span-2">
        <div className="max-w-xl w-full">
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

      <aside className="bg-slate-100 rounded-md p-4 flex flex-col justify-center">
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

      <div className="bg-slate-50 rounded-md p-4 flex flex-col justify-center">
        <h3 className="text-center mb-2 underline text-lg">My projects</h3>
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
          <img className="w-full" src="/images/Screenshot 2023-09-26 at 10.58.04.png" alt="pokemon finder" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Pokemon finder</div>
            <p className="text-gray-700 text-base">
              This is my first website created with React and used the pokemon API.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a href="https://github.com/Tiskiel/pokemonFinder">
                <GitHubLogoIcon className="w-6 h-6" />
              </a>
            </span>
            <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a href="https://pokemonfinder-ivory.vercel.app/home">
                <VercelLogoIcon className="w-6 h-6" />
              </a>
            </span>
          </div>
        </div>
        <div className="text-center mt-2">
          <Link href="">
            <PrimaryButton>See more</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

Index.layout = (page: ReactNode) => <HomeLayout>{page}</HomeLayout>;
export default Index;
