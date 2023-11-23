import { CardProps } from '@/Components/Card';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import HomeLayout from '@/Layouts/HomeLayout';
import { Button } from '@/shadcn/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shadcn/ui/card';
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
          description: 'Code',
        },
        {
          link: 'https://pokemonfinder-ivory.vercel.app/home',
          icon: <VercelLogoIcon className="h-6 w-6" />,
          description: 'Preview',
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
          description: 'Code',
        },
        {
          link: 'https://movie-browser-ionic-peer-coding-ymmk.vercel.app/tabs/tab1',
          icon: <VercelLogoIcon className="h-6 w-6" />,
          description: 'Preview',
        },
      ],
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7">
      {cards.map((card, index) => (
        <Card key={index} className="relative bg-slate-50">
          <CardHeader>
            <CardTitle className="text-lg">{card.title}</CardTitle>
            <CardDescription className="mt-4">{card.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            {card.logos.map((logo, index) => (
              <span
                key={index}
                className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                <Button variant="outline" className="flex justify-between">
                  <a className="mx-2" href={logo.link}>
                    {logo.icon}
                  </a>
                </Button>
              </span>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

Projects.layout = (page: ReactNode) => <HomeLayout>{page}</HomeLayout>;

export default Projects;
