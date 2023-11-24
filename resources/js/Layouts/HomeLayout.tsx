import { PropsWithChildren, useEffect } from 'react';
import HomeFooter from './Components/HomeFooter';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shadcn/ui/dropdown-menu';
import { Link, usePage } from '@inertiajs/react';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import ReactGA from 'react-ga';
import { PageProps } from '@/types';

const profile = {
  name: 'Jean-François Wanty',
  email: 'wanty.jf@gmail.com',
  avatar: '/images/DSC_0273.webp',
  backgroundImage: '/images/20220808_190627.webp',
  fields: [
    ['Email', 'wanty.jf@gmail.com'],
    ['Title', 'Junior full-stack developer'],
    ['Location', 'Belgium'],
    ['Birthday', 'November 18, 1991'],
  ],
};

export default function HomeLayout({ children }: PropsWithChildren) {
  const { url } = usePage();
  const { google_analytics_id } = usePage<PageProps>().props;
  ReactGA.initialize(google_analytics_id);

  useEffect(() => {
    ReactGA.pageview(url);
  }, [url]);

  const menu = (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Bars3BottomLeftIcon className="h-4 w-4 font-bold" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <Link href={route('home')}>About</Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={route('contact')}>Contact</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={route('projects')}>Projects</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <div>
      <div className="fixed top-0 w-full backdrop-blur-sm z-10">
        <div>
          <div>
            <img className="h-32 w-full object-cover lg:h-48" src={profile.backgroundImage} alt="" />
          </div>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex">
                <img
                  className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 object-cover"
                  src={profile.avatar}
                  alt=""
                />
              </div>
              <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                  <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                  <h3 className="text-sm font-medium text-gray-500">
                    {profile.fields[1][1]} <span className="font-bold">{menu}</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
              <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-80 max-w-5XL mx-auto flex flex-col justify-center sm:flex-row px-4 sm:px-6 lg:px-8">
        {children}
      </div>
      <HomeFooter />
    </div>
  );
}
