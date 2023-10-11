import clsx from 'clsx';
import { useState } from 'react';

export type logos = {
  link: string;
  icon: JSX.Element;
};

export type CardProps = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  logos: logos[];
};

export default function Card({ title, description, image, logos }: CardProps) {
  const [isTruncated, setIsTruncated] = useState(true);
  const truncate = clsx({ truncate: isTruncated });
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
      <img className="w-full" src={image.src} alt={image.alt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className={`text-gray-700 text-base ${truncate}`}>{description}</p>
      </div>
      <div className="flex px-6 pt-4 pb-2">
        <div className="basis-2/3">
          {logos.map(logo => (
            <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a href={logo.link}>{logo.icon}</a>
            </span>
          ))}
        </div>
        <button className="rounded-xl border p-2 hover:border-blue-500" onClick={() => setIsTruncated(!isTruncated)}>
          {isTruncated ? 'Read more' : 'Read less'}
        </button>
      </div>
    </div>
  );
}
