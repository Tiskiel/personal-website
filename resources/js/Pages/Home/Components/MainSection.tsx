import { CameraIcon } from '@heroicons/react/20/solid';

export default function MainSection() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-indigo-600">Case Study</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">About me</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-h-7 aspect-w-12 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/images/main-pic.png"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span className="ml-2">Photograph by my wife</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-gray-500">
                Passionate about video games and computers since my early years, I never took the plunge into this
                simultaneously magnificent and chaotic world until less than two years ago when I embarked on a
                professional reorientation, risking it all.
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                After an intensive two-month initiation, I dove into a lengthy training program focused on web and
                mobile development. I had the opportunity to explore various languages and frameworks, both on the
                front-end and back-end. I truly thrived during this training, thanks to both my colleagues and
                instructors.
              </p>
              <p>
                Since March 2023, I've been part of a young company that gave me a chance, and for that, I am grateful.
                I've ventured into a slightly different tech stack, equally rewarding. Currently, I'm involved in a
                large-scale project using Laravel, Inertia.js, React, and TypeScript. My colleague has been instrumental
                in guiding me on the frontend.
              </p>
              <p>The roles I have already performed:</p>
              <ul role="list">
                <li>Product owner on a training project</li>
                <li>Currently a full stack developer on a client project</li>
                <li>CEO of my life</li>
              </ul>
              <p>
                I envision continuing with this company in the future, enjoying both the project and camaraderie with my
                colleagues. I'll conclude this reflection on this chapter of my life by saying to anyone willing to
                listen: don't be afraid to dive into the unknown when it beckons!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
