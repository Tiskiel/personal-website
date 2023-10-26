import Card, { CardProps } from '@/Components/Card';
import HomeLayout from '@/Layouts/HomeLayout';
import { GitHubLogoIcon, VercelLogoIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';

function Projects() {
  const cards: CardProps[] = [
    {
      title: 'Pokemon finder',
      description: 'This is my first website created with React and used the Pokemon API.',
      image: { src: '/images/Screenshot 2023-09-26 at 10.58.04.webp', alt: 'Pokemon finder' },
      logos: [
        {
          link: 'https://github.com/Tiskiel/pokemonFinder',
          icon: <GitHubLogoIcon className="h-6 w-6" />,
        },
        {
          link: 'https://pokemonfinder-ivory.vercel.app/home',
          icon: <VercelLogoIcon className="h-6 w-6" />,
        },
      ],
    },
    {
      title: 'Movies Browser',
      description:
        'This website was created using Angular/Ionic in collaboration with a friend. I took care more of the logic side and my friend of the Scss. I really enjoyed working in peer coding.',
      image: { src: '/images/Screenshot 2023-09-26 at 10.59.12.webp', alt: 'Movie Browser' },
      logos: [
        {
          link: 'https://github.com/Tiskiel/MovieBrowserIonic/tree/main',
          icon: <GitHubLogoIcon className="h-6 w-6" />,
        },
        {
          link: 'https://movie-browser-ionic-peer-coding-ymmk.vercel.app/tabs/tab1',
          icon: <VercelLogoIcon className="h-6 w-6" />,
        },
      ],
    },
  ];
  return (
    <div className="w-screen grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

Projects.layout = (page: ReactNode) => <HomeLayout>{page}</HomeLayout>;

export default Projects;
