import { PlayIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { classNames } from "../utils";
import { Portal } from "./Portal";

export function SearchSERPResult({results}) {
    return (
        <div>
        <div className="mx-auto w-full">
          <p className="text-gray-500 text-md mb-5 mt-3">
            {results.quantidadeAds} resultados
          </p>
            {results.data?.ads?.map((result) => (
              <div key={result.link} className="max-w-xl mb-8 font-sans">
                <div className="group">
                  <p>
                    <span className={`inline-flex items-center gap-x-1.5 rounded-md 
                      ${result.block_position === 'bottom' ? 'bg-red-100' : 'bg-green-100'} 
                      px-2 py-1 text-xs font-medium 
                      ${result.block_position === 'bottom' ? 'text-red-700' : 'text-green-700'}`}>
                        <svg className={`h-1.5 w-1.5 ${result.block_position === 'bottom' ? 'fill-red-500' : 'fill-green-500'}`} viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx={3} cy={3} r={3} />
                        </svg>
                        {result.block_position === 'bottom' ? 'RODAPE' : 'TOPO'}
                    </span>
                  </p>

                  <a 
                    href={result.link} 
                    className="space-x-4 text-sm text-gray-900">
                    {result.link}
                  </a>
                  <p>
                    <a 
                      href={result.link} 
                      className="space-x-4 text-sm text-green-700">
                      {result.displayed_link}
                    </a>
                  </p>
                  <a href={result.link}>
                    <h2 className="truncate text-xl text-blue-700 font-medium group-hover:underline" >
                      {result.title}
                    </h2>
                  </a>
                  
                </div>
                <p className="line-clamp-2 prose prose-sm text-sm mt-2 max-w-none text-gray-500">
                  {result.description}
                </p>

                {/* Sitelinks  */}
                {result.sitelinks && result.sitelinks.length > 0 &&(
                  <div className="pt-2">
                    <p className="font-bold text-sm text-gray-600"> Sitelinks</p>
                    {result.sitelinks?.map((sitelink) => (
                      <div className="flex items-center gap-x-3">
                        <div className="text-green-400 bg-green-400/10">
                          <div className="h-2 w-2 rounded-full bg-current" />
                        </div>
                        <div>
                          <a href={sitelink.link} className="flex space-x-4 text-sm text-gray-600">
                            {sitelink.title}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Products   */}
                {result.products && result.products.length > 0 &&(
                  <div className="pt-2">
                    <p className="font-bold text-sm text-gray-600"> Produtos</p>
                    {result.products?.map((product) => (
                      <div className="flex items-center gap-x-3">
                        {/* <div className="text-green-400 bg-green-400/10">
                          <div className="h-2 w-2 rounded-full bg-current" />
                        </div> */}
                        <div>
                          <a href={product.link} className="flex space-x-4 text-sm text-gray-600">
                            {product.title}
                          </a>
                          {/* Extensions */}
                          {product.extensions?.map( (extension) =>(
                            <>
                              <p> {extension} </p>
                            </>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Extensions   */}
                {result.extensions && result.extensions.length > 0 &&(
                  <div className="pt-2">
                    <p className="font-bold text-sm text-gray-600"> Extensões </p>
                    {result.extensions?.map((extension) => (
                      <div className="flex items-center gap-x-3">
                        <p className="flex space-x-4 text-sm text-gray-600">
                          {extension}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))
            }
          {/* <PaginationButtons /> */}
        </div>
  
        {/* <Footer /> */}
      </div>
    );
}

