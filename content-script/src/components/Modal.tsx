import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from "react";

interface Modal {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  focusRef: any;
  description?: string;
}

function ModalRoot({
  isOpen = false,
  title,
  children,
  focusRef,
  description,
}: Modal) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={focusRef}
        onClose={() => { }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <Modal.Content>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {title}
                      </Dialog.Title>
                      {description && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">{description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Modal.Content>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const Content = ({ children }) => (
  <div className="bg-white px-4 pt-5">{children}</div>
);
const Buttons = ({ children }) => (
  <div className="bg-gray-50 px-4 py-3 mt-4 flex justify-end space-x-2">
    {children}
  </div>
);

export const Modal = Object.assign(ModalRoot, {
  Content,
  Buttons,
});