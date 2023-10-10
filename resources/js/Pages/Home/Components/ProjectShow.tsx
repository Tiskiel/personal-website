import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from '@inertiajs/react';
import { GitHubLogoIcon, VercelLogoIcon } from '@radix-ui/react-icons';

export default function ProjectShow() {
  return (
    <div className="bg-slate-50 rounded-md p-4 flex flex-col justify-center items-center">
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
  );
}
