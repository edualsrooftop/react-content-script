import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useAppStore } from '../store';
import { Portal } from './Portal';

import { useState, useEffect } from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { Divider } from "./Divider";
import { Loader } from "./Loader";
import { Textarea } from "./Textarea";
import { Response } from "./Response";
// import { SerpResult } from "./SerpResult"
import { SERP } from "./SERP"

export default function Drawer() {
  const app = useAppStore();

  const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState("");
	const [prompt, setPrompt] = useState("");
	const [open, setOpen] = useState(false)

  const modeloResponse = {
		imageUrl: '',
		productName: '',
		vendorName: '',
		ranking: '',
		comission: '',
		difficultLevel: '',
		quantidadeAds: '',
		quantidadeAdsComSitelinks: '',
		quantidadeAdsComExtensions: '',
		quantidadeAdsComOferta: '',
		quantidadeAdsComProducts: '',
		dominiosLinks: '',
		quantidadeInlineVideos: '',
		relatedSearches: '',
		data: { ads : [] }
	}


  const searchSERP = async (term) => {
		const apiKey = '5694d11e12275f34eca947428b3dfd9d3452825acc799a9994f289671ff2d642';
		const gl = 'br';
		const hl = 'pt-br';
		const location = 'Brazil';
		const apiUrl = `https://serpapi.com/search.json?api_key=${apiKey}&gl=${gl}&hl=${hl}&location=${location}&q=${encodeURIComponent(term)}`;
		console.log(apiUrl)
		try {
			const response = await fetch(apiUrl);
			const data = await response.json();
			
			return data;
		} catch (error) {
			
			throw new Error('Erro ao fazer a requisição para a API da SERP.');
		}
	};

	const getSerpResults = async () => {
		setLoading(true);
		setOpen(true)
		// setResponse(modeloResponse)
		console.log('search')
		try {
			const resp = await searchSERP(prompt);
			const counts = getCount(resp)
			console.log(counts)
			//setResponse( counts );
			// setResponse( resp );
			setLoading(false);
		} catch (error) {
			//setResponse(error);
			setLoading(false);
      console.log('Erro:')
			//console.log('Erro:', error.message);
		}
	};

	const getCount = (data) =>{
		if(data.ads){

			var quantidadeAds = data.ads.length;
			var quantidadeAdsComSitelinks = data.ads.filter((ad) => ad.sitelinks && ad.sitelinks.length > 0).length;
			var quantidadeAdsComExtensions = data.ads.filter((ad) => ad.extensions && ad.extensions.length > 0).length;
			var quantidadeAdsComOferta = data.ads.filter((ad) => ad.oferta).length;
			var quantidadeAdsComProducts = data.ads.filter((ad) => ad.products && ad.products.length > 0).length;
	
			const dominiosLinks = {};
			data.ads.forEach((ad) => {
			const dominio = new URL(ad.link).hostname;
			if (dominiosLinks[dominio]) {
				dominiosLinks[dominio]++;
			} else {
				dominiosLinks[dominio] = 1;
			}
			});
	
			var quantidadeInlineVideos = 0;
			if (data.inline_videos){
				quantidadeInlineVideos=data.inline_videos.length
			}
			var relatedSearches = '';
			if (data.related_searches){
				relatedSearches = data.related_searches.map((search) => search.query);
			}
	
			const resultado = {
				imageUrl: 'https://media.braip.com/public/cdn/ILY5qFa0LdPtcE5pVRZCFRqVFpyBMvJw4leWXmwL.gif',
				productName: 'Hialuroni Caps',
				vendorName: 'CAPS ISHU',
				ranking: 'Quente',
				comission: '60%',
				difficultLevel: 'Alta',
				quantidadeAds: quantidadeAds,
				quantidadeAdsComSitelinks: quantidadeAdsComSitelinks,
				quantidadeAdsComExtensions: quantidadeAdsComExtensions,
				quantidadeAdsComOferta: quantidadeAdsComOferta,
				quantidadeAdsComProducts: quantidadeAdsComProducts,
				dominiosLinks: dominiosLinks,
				quantidadeInlineVideos: quantidadeInlineVideos,
				relatedSearches: relatedSearches,
				data: data
			};
			return resultado
		}else{
			return []
		}
	}

	const onClick = () => {
		console.log('search before')
		getSerpResults();

		setOpen(true)

		
	};
	
	// getChatGPTResponse();

	const onChange = (event) => {
		setPrompt(event.target.value);
	};



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
                  Anpalise do produto
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
            <div className="relative mt-6 flex-1 px-4 sm:px-6 overflow-y-auto">
              <SERP isOpen={open} data={ response } onClose={setOpen}/>
            </div>
          </div>
        </Transition>
      </div>
    </Portal >

  )
}

