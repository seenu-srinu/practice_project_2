import React from "react";
const Singlechat=()=>{
    return(
        
          
                <main className="container-fluid layout-wrapper">
                  <div className="k-fixed k-top-0 k-bottom-0 k-right-0 k-z-[1120] k-h-screen k-w-full md:k-w-96 k-bg-gray-900 k-text-white k-shadow-2xl k-overflow-y-hidden k-flex k-flex-col k-justify-between">
                    <div>
                      <div className="k-flex k-justify-between k-items-center k-border-b k-border-t-0 k-border-l-0 k-border-r-0 k-border-solid k-border-gray-700 k-p-3">
                        <div className="k-flex k-space-x-3 k-items-center">
                          <button className="k-overflow-hidden k-rounded-full k-w-6 k-h-6 k-text-white k-bg-gray-800 k-appearance-none k-border-0 flex-center p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} fill="currentColor" viewBox="0 0 256 256" className="k-w-4 k-h-4">
                              <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z" />
                            </svg>
                          </button>
                          <div className="avatar avatar-sm avatar-online">
                            <img src="../../images/profile/1.png" className="rounded-circle" alt="" />
                          </div>
                          <div>
                            <p className="k-font-semibold mb-0">Harry Potter</p>
                            <p className="mb-0 k-text-gray-500">Last seen 2 hrs ago</p>
                          </div>
                        </div>
                        <button data-toggle="collapse" href="#searchchatsingle" role="button" aria-expanded="false" aria-controls="searchchatsingle" className="k-overflow-hidden k-rounded-full k-w-6 k-h-6 k-text-white k-bg-gray-900 k-appearance-none k-border-0 flex-center p-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} fill="currentColor" viewBox="0 0 256 256" className="k-w-4 k-h-4">
                            <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z" />
                          </svg>
                        </button>
                      </div>
                      <div id="searchchatsingle" className="collapse p-2 k-border-b k-border-t-0 k-border-l-0 k-border-r-0 k-border-solid k-border-gray-700">
                        <input type="search" className="k-bg-gray-800 form-control border-0" placeholder="Search..." />
                      </div>
                    </div>
                    <div className="k-h-full k-p-3 k-overflow-y-auto k-flex k-flex-col k-mt-auto k-text-gray-100 k-space-y-2">
                      <div className="k-flex k-space-x-2 k-items-end k-w-4/5">
                        <div className="avatar avatar-xs avatar-online">
                          <img src="../../images/profile/2.png" className="rounded-circle" alt="" />
                        </div>
                        <div className="k-rounded-lg k-p-3 k-bg-gray-800">
                          Hello and thanks for getting in touch with us! What can we help you with
                          today?
                        </div>
                      </div>
                      <div className="k-flex k-space-x-2 k-items-end k-w-3/4 k-justify-end k-ml-auto">
                        <div className="k-rounded-lg k-p-2 k-bg-gray-800">
                          <div className="k-relative">
                            <img src="../../images/other/placeholder.jpg" className="k-w-full k-rounded" />
                            <button className="k-absolute k-bottom-2 k-right-2 k-overflow-hidden k-rounded-full k-w-8 k-h-8 k-text-white k-bg-gray-900 k-appearance-none k-border-0 flex-center p-0">
                              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="currentColor" viewBox="0 0 256 256" className="k-w-4 k-h-4">
                                <path d="M82.34,117.66A8,8,0,0,1,88,104h32V40a8,8,0,0,1,16,0v64h32a8,8,0,0,1,5.66,13.66l-40,40a8,8,0,0,1-11.32,0ZM216,144a8,8,0,0,0-8,8v56H48V152a8,8,0,0,0-16,0v56a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A8,8,0,0,0,216,144Z" />
                              </svg>
                            </button>
                          </div>
                          <div className="flex-between k-mt-2">
                            <p className="k-text-gray-500 k-text-xs mb-0">22:00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" className="k-text-sky-500 k-w-4 k-h-4">
                              <path d="M152.41,88.56l-89.6,88a12,12,0,0,1-16.82,0L7.59,138.85a12,12,0,0,1,16.82-17.13l30,29.46,81.19-79.74a12,12,0,0,1,16.82,17.12Zm96.15-17a12,12,0,0,0-17-.15L150.4,151.18l-7.88-7.74a12,12,0,0,0-16.82,17.12l16.29,16a12,12,0,0,0,16.82,0l89.6-88A12,12,0,0,0,248.56,71.59Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="k-flex k-space-x-2 k-items-end k-w-3/4 k-justify-end k-ml-auto">
                        <div className="k-rounded-lg k-p-2 k-bg-gray-800">
                          <p className="mb-0">Where are you located?</p>
                          <div className="flex-between k-mt-2">
                            <p className="k-text-gray-500 k-text-xs mb-0">22:00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" className="k-text-sky-500 k-w-4 k-h-4">
                              <path d="M152.41,88.56l-89.6,88a12,12,0,0,1-16.82,0L7.59,138.85a12,12,0,0,1,16.82-17.13l30,29.46,81.19-79.74a12,12,0,0,1,16.82,17.12Zm96.15-17a12,12,0,0,0-17-.15L150.4,151.18l-7.88-7.74a12,12,0,0,0-16.82,17.12l16.29,16a12,12,0,0,0,16.82,0l89.6-88A12,12,0,0,0,248.56,71.59Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="k-flex k-space-x-2 k-items-end k-w-3/4 k-justify-end k-ml-auto">
                        <div className="k-rounded-lg k-p-2 k-bg-gray-800">
                          <p className="mb-0">How else can I contact you?</p>
                          <div className="flex-between k-mt-2">
                            <p className="k-text-gray-500 k-text-xs mb-0">22:00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" className="k-text-sky-500 k-w-4 k-h-4">
                              <path d="M152.41,88.56l-89.6,88a12,12,0,0,1-16.82,0L7.59,138.85a12,12,0,0,1,16.82-17.13l30,29.46,81.19-79.74a12,12,0,0,1,16.82,17.12Zm96.15-17a12,12,0,0,0-17-.15L150.4,151.18l-7.88-7.74a12,12,0,0,0-16.82,17.12l16.29,16a12,12,0,0,0,16.82,0l89.6-88A12,12,0,0,0,248.56,71.59Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="k-flex k-space-x-2 k-items-end k-w-3/4 k-justify-end k-ml-auto">
                        <div className="k-rounded-lg k-p-2 k-bg-gray-800">
                          <p className="mb-0"><a href="#">https:/www.f1.com</a></p>
                          <img src="../../images/other/placeholder.jpg" className="k-w-full k-rounded k-my-2" />
                          <p className="mb-0 k-font-semibold">
                            F1 - The Official Home of Formula 1® Racing
                          </p>
                          <p className="mb-0 k-text-gray-400">
                            Enter the world of Formula 1. Your go-to source for the latest F1
                            news, video highlights, GP results, live timing, in-depth analysis and
                            expert commentary.
                          </p>
                          <div className="flex-between k-mt-2">
                            <p className="k-text-gray-500 k-text-xs mb-0">22:00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" className="k-text-sky-500 k-w-4 k-h-4">
                              <path d="M152.41,88.56l-89.6,88a12,12,0,0,1-16.82,0L7.59,138.85a12,12,0,0,1,16.82-17.13l30,29.46,81.19-79.74a12,12,0,0,1,16.82,17.12Zm96.15-17a12,12,0,0,0-17-.15L150.4,151.18l-7.88-7.74a12,12,0,0,0-16.82,17.12l16.29,16a12,12,0,0,0,16.82,0l89.6-88A12,12,0,0,0,248.56,71.59Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="k-flex k-space-x-2 k-items-end k-w-3/4 k-justify-end k-ml-auto">
                        <div className="k-rounded-lg k-p-2 k-bg-gray-800">
                          <div className="k-flex k-justify-between k-items-center k-border-b k-border-t-0 k-border-l-0 k-border-r-0 k-border-solid k-border-gray-700 k-space-x-3 k-pb-2">
                            <div className="k-flex k-space-x-2 k-items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" className="k-h-10 k-w-10 k-flex-shrink-0 k-text-gray-600">
                                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Z" />
                              </svg>
                              <div>
                                <p className="k-font-semibold mb-0">document_name.xls</p>
                                <p className="mb-0 k-text-gray-500">20kb · PDF</p>
                              </div>
                            </div>
                            <button className="k-overflow-hidden k-rounded-full k-w-8 k-h-8 k-text-white k-bg-gray-900 k-appearance-none k-border-0 flex-center p-0">
                              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="currentColor" viewBox="0 0 256 256" className="k-w-4 k-h-4">
                                <path d="M82.34,117.66A8,8,0,0,1,88,104h32V40a8,8,0,0,1,16,0v64h32a8,8,0,0,1,5.66,13.66l-40,40a8,8,0,0,1-11.32,0ZM216,144a8,8,0,0,0-8,8v56H48V152a8,8,0,0,0-16,0v56a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A8,8,0,0,0,216,144Z" />
                              </svg>
                            </button>
                          </div>
                          <div className="flex-between k-mt-2">
                            <p className="k-text-gray-500 k-text-xs mb-0">22:00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" className="k-text-sky-500 k-w-4 k-h-4">
                              <path d="M152.41,88.56l-89.6,88a12,12,0,0,1-16.82,0L7.59,138.85a12,12,0,0,1,16.82-17.13l30,29.46,81.19-79.74a12,12,0,0,1,16.82,17.12Zm96.15-17a12,12,0,0,0-17-.15L150.4,151.18l-7.88-7.74a12,12,0,0,0-16.82,17.12l16.29,16a12,12,0,0,0,16.82,0l89.6-88A12,12,0,0,0,248.56,71.59Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="k-flex k-space-x-2 k-items-end k-w-3/4 k-justify-end k-ml-auto">
                        <div className="k-rounded-lg k-p-2 k-bg-gray-800">
                          <video id="video" controls="controls" preload="none" className="k-w-full k-rounded" poster="https://assets.codepen.io/32795/poster.png">
                            <source id="mp4" src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
                            <source id="webm" src="http://media.w3.org/2010/05/sintel/trailer.webm" type="video/webm" />
                            <source id="ogv" src="http://media.w3.org/2010/05/sintel/trailer.ogv" type="video/ogg" />
                          </video>
                          <div className="flex-between k-mt-2">
                            <p className="k-text-gray-500 k-text-xs mb-0">22:00</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" className="k-text-gray-500 k-w-4 k-h-4">
                              <path d="M152.41,88.56l-89.6,88a12,12,0,0,1-16.82,0L7.59,138.85a12,12,0,0,1,16.82-17.13l30,29.46,81.19-79.74a12,12,0,0,1,16.82,17.12Zm96.15-17a12,12,0,0,0-17-.15L150.4,151.18l-7.88-7.74a12,12,0,0,0-16.82,17.12l16.29,16a12,12,0,0,0,16.82,0l89.6-88A12,12,0,0,0,248.56,71.59Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-between k-w-full k-border-t k-border-solid k-border-gray-700 k-border-b-0 k-border-l-0 k-border-r-0 k-space-x-1 chat-dropable k-relative k-max-w-full">
                      <div className="quill-custom-editor k-flex k-items-center">
                        <div id="editor-1" className="editor" />
                        <div className="quill-counter word-count !k-text-white k-px-2">0</div>
                      </div>
                      <button className="k-overflow-hidden k-rounded-full k-w-8 k-h-8 k-flex-shrink-0 k-text-white k-bg-gray-900 k-appearance-none k-border-0 flex-center p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} fill="currentColor" viewBox="0 0 256 256" className="k-w-5 k-h-5">
                          <path d="M212.48,136.49l-82.06,82a60,60,0,0,1-84.85-84.88l98.16-97.89a40,40,0,0,1,56.56,56.59l-.17.16-95.8,92.22a12,12,0,1,1-16.64-17.3l95.71-92.12a16,16,0,0,0-22.7-22.56L62.53,150.57a36,36,0,0,0,50.93,50.91l82.06-82a12,12,0,0,1,17,17Z" />
                        </svg>
                      </button>
                      <button className="k-overflow-hidden k-rounded-full k-w-8 k-h-8 k-flex-shrink-0 k-text-white k-bg-gray-900 k-appearance-none k-border-0 flex-center p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} fill="currentColor" viewBox="0 0 256 256" className="k-w-5 k-h-5">
                          <path d="M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15l-35.71-75.39a4,4,0,0,1,.79-4.54l57.26-57.27a8,8,0,0,0-11.31-11.31L97.08,147.6a4,4,0,0,1-4.54.79l-75-35.53A16.37,16.37,0,0,1,8,97.36,15.89,15.89,0,0,1,19.57,82.84l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z" />
                        </svg>
                      </button>
                      <div className="k-absolute k-inset-0 k-w-full k-border-2 k-border-dashed k-border-sky-500 k-text-white k-bg-black/90 text-center k-py-2 m-0 chat-drop-overlay k-select-none" style={{display: 'none', pointerEvents: 'none'}}>
                        Drop here to attach
                      </div>
                    </div>
                  </div>
                </main>
              );
            }
export default Singlechat;