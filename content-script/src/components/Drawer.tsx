import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useAppStore } from '../store';
import { Portal } from './Portal';

export default function Drawer() {
  const app = useAppStore();

  return (
    <Portal>
      <div className='fixed top-0 right-0 h-full z-top'>
        <Transition
          show={app.drawer}
          enter="transform transition ease-in-out duration-200 sm:duration-400"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-200 sm:duration-400"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          className="h-full"
        >
          <div className="flex h-full flex-col bg-white py-6 shadow-xl w-[400px]">
            <div className="px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <div className="text-base font-semibold leading-6 text-gray-900">
                  Panel title
                </div>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => app.closeDrawer()}
                  >
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative mt-6 flex-1 px-4 sm:px-6 overflow-y-auto">Content</div>
          </div>
        </Transition>
      </div>
    </Portal >

  )
}

