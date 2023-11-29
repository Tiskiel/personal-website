import { ChangeEvent, FormEvent, ReactNode, useEffect, useState } from 'react';
import { ChevronDownIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid';
import HomeLayout from '@/Layouts/HomeLayout';
import { useForm } from '@inertiajs/react';
import { MailFormRequestData, PhoneZoneEnum } from '@/types/generated';
import { Toaster } from '@/shadcn/ui/toaster';
import { useToast } from '@/shadcn/ui/use-toast';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

function Contact() {
  const [agreed, setAgreed] = useState(false);
  const { toast } = useToast();
  const sendEmailForm = useForm<MailFormRequestData>({
    first_name: '',
    last_name: '',
    email: '',
    phone_zone: PhoneZoneEnum.EU,
    phone: '',
    company: '',
    message: '',
  });

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendEmailForm.post(route('send.mail'));
  }

  useEffect(() => {
    if (sendEmailForm.wasSuccessful) {
      toast({
        title: 'Message: send',
        description: 'Thank you, your message has been sent successfully',
      });
      sendEmailForm.reset();
    }
  }, [sendEmailForm.wasSuccessful]);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact me</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Leave your contact details to stay in touch.</p>
      </div>
      <form
        action={route('send.mail')}
        method="POST"
        onSubmit={e => submit(e)}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={e => sendEmailForm.setData('first_name', e.target.value)}
              />
              {sendEmailForm.errors.first_name && (
                <div className="flex items-center mt-2 text-sm text-red-600">
                  <ExclamationCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400" aria-hidden="true" />
                  <span>{sendEmailForm.errors.first_name}</span>
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={e => sendEmailForm.setData('last_name', e.target.value)}
              />
            </div>
            {sendEmailForm.errors.last_name && (
              <div className="flex items-center mt-2 text-sm text-red-600">
                <ExclamationCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400" aria-hidden="true" />
                <span>{sendEmailForm.errors.last_name}</span>
              </div>
            )}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={e => sendEmailForm.setData('company', e.target.value)}
              />
            </div>
            {sendEmailForm.errors.company && (
              <div className="flex items-center mt-2 text-sm text-red-600">
                <ExclamationCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400" aria-hidden="true" />
                <span>{sendEmailForm.errors.company}</span>
              </div>
            )}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={e => sendEmailForm.setData('email', e.target.value)}
              />
            </div>
            {sendEmailForm.errors.email && (
              <div className="flex items-center mt-2 text-sm text-red-600">
                <ExclamationCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400" aria-hidden="true" />
                <span>{sendEmailForm.errors.email}</span>
              </div>
            )}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  onChange={e => {
                    const inputValue: string = e.target.value;

                    if (Object.values(PhoneZoneEnum).includes(inputValue as PhoneZoneEnum)) {
                      sendEmailForm.setData('phone_zone', inputValue as PhoneZoneEnum);
                    }
                  }}
                  defaultValue={PhoneZoneEnum.EU}
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>BE</option>
                  <option>FR</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={e => sendEmailForm.setData('phone', e.target.value)}
              />
            </div>
            {sendEmailForm.errors.phone && (
              <div className="flex items-center mt-2 text-sm text-red-600">
                <ExclamationCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400" aria-hidden="true" />
                <span>{sendEmailForm.errors.phone}</span>
              </div>
            )}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={e => sendEmailForm.setData('message', e.target.value)}
                defaultValue={''}
              />
            </div>
            {sendEmailForm.errors.message && (
              <div className="flex items-center mt-2 text-sm text-red-600">
                <ExclamationCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400" aria-hidden="true" />
                <span>{sendEmailForm.errors.message}</span>
              </div>
            )}
          </div>
          {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group> */}
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}

Contact.layout = (page: ReactNode) => <HomeLayout>{page}</HomeLayout>;
export default Contact;
