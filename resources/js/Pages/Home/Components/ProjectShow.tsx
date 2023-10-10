import Card, { logos } from '@/Components/Card';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from '@inertiajs/react';
import { GitHubLogoIcon, VercelLogoIcon } from '@radix-ui/react-icons';

export default function ProjectShow() {
  const logos: logos[] = [
    {
      link: 'https://github.com/Tiskiel/pokemonFinder',
      icon: <GitHubLogoIcon className="h-6 w-6" />,
    },
    {
      link: 'https://pokemonfinder-ivory.vercel.app/home',
      icon: <VercelLogoIcon className="h-6 w-6" />,
    },
  ];

  return (
    <div className="bg-slate-50 rounded-md p-4 flex flex-col justify-center items-center">
      <h3 className="text-center mb-2 underline text-lg">My projects</h3>
      <Card
        title="Pokemon finder"
        description="This is my first website created with React and used the Pokemon API."
        image={{ src: '/images/Screenshot 2023-09-26 at 10.58.04.png', alt: 'Pokemon finder' }}
        logos={logos}
      />
      <div className="text-center mt-2">
        <Link href={route('projects')}>
          <PrimaryButton>See more</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
