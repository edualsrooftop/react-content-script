import { PlayIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HeartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { SearchSERPResult } from './SearchSERPResult'
import { TrafficGraph } from './TrafficGraph'


export function SERP({ isOpen, data, onClose }) {
    const handleClose = () => {
        // console.log('Onclose')
        onClose(false);
      };
      var keywordData = {
        id: "06252233-6303-0367-0000-0cf2b0757f8c",
        status_code: 20000,
        status_message: "Ok.",
        time: "0.0206 sec.",
        cost: 0.075,
        result_count: 1,
        path: [
          "v3",
          "keywords_data",
          "google_ads",
          "search_volume",
          "live"
        ],
        data: {
          api: "keywords_data",
          function: "search_volume",
          se: "google_ads",
          keywords: [
            "hialuroni caps"
          ],
          location_code: 2076,
          language_code: "pt",
          search_partners: false,
          sort_by: "high_top_of_page_bid"
        },
        result: [
          {
            keyword: "hialuroni caps",
            spell: null,
            location_code: 2076,
            language_code: "pt",
            search_partners: false,
            competition: "HIGH",
            competition_index: 100,
            search_volume: 14800,
            low_top_of_page_bid: 0.34,
            high_top_of_page_bid: 0.76,
            monthly_searches: [
              {
                year: 2023,
                month: 5,
                search_volume: 5400
              },
              {
                year: 2023,
                month: 4,
                search_volume: 5400
              },
              {
                year: 2023,
                month: 3,
                search_volume: 8100
              },
              {
                year: 2023,
                month: 2,
                search_volume: 8100
              },
              {
                year: 2023,
                month: 1,
                search_volume: 12100
              },
              {
                year: 2022,
                month: 12,
                search_volume: 12100
              },
              {
                year: 2022,
                month: 11,
                search_volume: 14800
              },
              {
                year: 2022,
                month: 10,
                search_volume: 18100
              },
              {
                year: 2022,
                month: 9,
                search_volume: 27100
              },
              {
                year: 2022,
                month: 8,
                search_volume: 22200
              },
              {
                year: 2022,
                month: 7,
                search_volume: 12100
              },
              {
                year: 2022,
                month: 6,
                search_volume: 14800
              }
            ]
          }
        ]
      }
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClose}>
                <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <Dialog.Panel className="pointer-events-auto relative w-auto">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                            <button
                                type="button"
                                className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={() => handleClose()}
                            >
                                <span className="sr-only">Fechar </span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            </div>
                        </Transition.Child>
                        <div className="h-full overflow-y-auto bg-white p-8">
                            <div className="space-y-6 pb-16">
                            <div className="flex gap-x-4">
                                {/* h-12 w-12 flex-none rounded-full bg-gray-50 */}
                                <div className="flex-none w-28 overflow-hidden rounded-lg">
                                <img
                                    src={data.imageUrl}
                                    alt=""
                                    className="object-cover"
                                />
                                </div>
                                <div className="mt-4 flex items-start justify-between">
                                <div>
                                    <h2 className="text-base font-semibold leading-6 text-gray-900">
                                    <span className="sr-only">Detalhes para </span>
                                    {data.productName}
                                    </h2>
                                    <p className="text-sm font-medium text-gray-500">{data.productValue}</p>
                                </div>
                                <button
                                    type="button"
                                    className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <HeartIcon className="h-6 w-6" aria-hidden="true" />
                                    <span className="sr-only">Favoritar</span>
                                </button>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900">Informações</h3>
                                <dl className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
                                {/* <div className="flex justify-between py-3 text-sm font-medium">
                                    <dt className="text-gray-500">Produtor</dt>
                                    <dd className="text-gray-900"> {data.vendorName} </dd>
                                </div>
                                <div className="flex justify-between py-3 text-sm font-medium">
                                    <dt className="text-gray-500"> Ranking </dt>
                                    <dd className="text-gray-900"> {data.ranking} </dd>
                                </div> */}
                                <div className="flex justify-between py-3 text-sm font-medium">
                                    <dt className="text-gray-500">Comissão</dt>
                                    <dd className="text-gray-900">{data.comission}</dd>
                                </div>
                                <div className="flex justify-between py-3 text-sm font-medium">
                                    <dt className="text-gray-500">Volume de busca por mês</dt>
                                    <dd className="text-gray-900"> {data.difficultLevel} </dd>
                                </div>
                                {/* <div className="flex justify-between py-3 text-sm font-medium">
                                    <dt className="text-gray-500">Resolution</dt>
                                    <dd className="text-gray-900">72 x 72</dd>
                                </div> */}
                                </dl>
                            </div>
                            <div>
                                {/* TODO: #2 Adicionar buscas mensais  */}
                                <h3 className="font-medium text-gray-900">Buscas mensais</h3>
                                <dl className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
                                    <div className="flex justify-between py-3 text-sm font-medium">
                                        <dt className="text-gray-500">Competição</dt>
                                        <dd className="text-gray-900">{keywordData.result[0].competition}</dd>
                                    </div>
                                    <div className="flex justify-between py-3 text-sm font-medium">
                                        <dt className="text-gray-500">search_volume</dt>
                                        <dd className="text-gray-900">{keywordData.result[0].search_volume}</dd>
                                    </div>
                                    <div className="flex justify-between py-3 text-sm font-medium">
                                        <dt className="text-gray-500">low_top_of_page_bid</dt>
                                        <dd className="text-gray-900">{keywordData.result[0].low_top_of_page_bid}</dd>
                                    </div>
                                    <div className="flex justify-between py-3 text-sm font-medium">
                                        <dt className="text-gray-500">high_top_of_page_bid</dt>
                                        <dd className="text-gray-900">{keywordData.result[0].high_top_of_page_bid}</dd>
                                    </div>

                                </dl>
                                {/* "competition": "HIGH",
                                "competition_index": 100,
                                "search_volume": 14800,
                                "low_top_of_page_bid": 0.34,
                                "high_top_of_page_bid": 0.76, */}
                            </div>
                            <div>
                                {/* <TrafficGraph keywords={keywordData} /> */}
                                {keywordData && <TrafficGraph keywords={keywordData} />}

                                <h3 className="font-medium text-gray-900">Patrocinado</h3>
                                {/* role="list"  */}

                                {data && <SearchSERPResult results={data} />}

                                {/* <ul className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
                                <li className="flex items-center justify-between py-3">
                                    <div className="flex items-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80"
                                        alt=""
                                        className="h-8 w-8 rounded-full"
                                    /> 
                                    <div className="ml-4 text-sm font-medium text-gray-900">
                                        <p>{data.quantidadeAds} campanhas</p>
                                        <p>{data.quantidadeInlineVideos} videos</p>
                                        <p>{data.quantidadeAdsComSitelinks} com Sitelinks</p>
                                        <p>{data.quantidadeAdsComExtensions} com Extensions</p>
                                        <p>{data.quantidadeAdsComOferta} com Ofertas</p>
                                        <p>{data.quantidadeAdsComProducts} com Produto</p>
                                        <p>{data.relatedSearches} pesquisas relacionadas</p>
                                    </div> 
                                    </div>
                                    <button
                                    type="button"
                                    className="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                    Visualizar<span className="sr-only"> 
                                    
                                    </span>
                                    </button> 
                                </li>
                                </ul> */}
                            </div>
                            {/* TODO: #3 Enviar dados para api */}
                            <div className="flex">
                                <button
                                type="button"
                                className="flex-1 rounded-md bg-indigo-600 px-3 py-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Adicionar na análise
                                </button>
                                {/* <button
                                type="button"
                                className="ml-3 flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                Cancelar
                                </button> */}
                            </div>
                            </div>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}


