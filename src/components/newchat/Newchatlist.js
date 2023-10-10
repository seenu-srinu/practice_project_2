import React, { useEffect, useState } from "react";
import { HOST, TOKEN } from "../config";
const Newchatlist=()=>{
  const[newChatList,setNewChatList]=useState([])
  
  useEffect(()=>{
    newChatReq()
  },[])

  const newChatReq=async ()=>{
    try{
   let fetchReq=await fetch(HOST+"/users_list/",{
  headers:{
    "token":TOKEN,
    "Content-Type":"application.json"
  }
})
let fetchRes=await fetchReq.json()
console.log("newchat Res: ",fetchRes)
fetchRes.result.map((i)=>{
  i.selected=false
})
setNewChatList(fetchRes.result)
console.log("added nwew key: ",fetchRes.result)
    }catch(error){
      console.log(error)
    }
  }

  const groupSelection = (index)=>{
    if(newChatList[index].selected==true){
        newChatList[index].selected=false
    }else{
     newChatList[index].selected=true
    }
    setNewChatList([...newChatList])
}


const creatGroup=(index)=>{
  return newChatList.filter((i)=>i.selected).length>1
}

    return(
     <main className="container-fluid layout-wrapper">
                  <div className="k-fixed k-top-0 k-bottom-0 k-right-0 k-z-[1120] k-h-screen k-w-full md:k-w-96 k-bg-gray-900 k-p-4 k-text-white k-shadow-2xl k-overflow-y-auto">
                    <div className="k-flex k-justify-between k-items-center k-pb-3">
                      <div className="k-flex k-space-x-3 k-items-center">
                        <button className="k-overflow-hidden k-rounded-full k-w-6 k-h-6 k-text-white k-bg-gray-800 k-appearance-none k-border-0 flex-center p-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} fill="currentColor" viewBox="0 0 256 256" className="k-w-4 k-h-4">
                            <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z" />
                          </svg>
                        </button>
                        <div>
                          <p className="k-font-semibold mb-0">New Chat</p>
                 
                        </div>
                       
                        {creatGroup()?  <a class="btn btn-sm btn-primary" href="#">Create Chat</a> : null }
                      
                      </div>
                    </div>
                    <div className="k-overflow-hidden k-rounded k-bg-gray-800 k-divide-y k-divide-solid k-divide-gray-700">
                      
                     
                      {
                        newChatList.map((item,index)=>{
                          if(item.selected){
                            console.log("selcted",index)
                          }else{
                            console.log("Not Selected",index)
                          }
                          return(
                            <a className="k-relative k-px-4 k-py-3 flex-between k-space-x-4 k-text-white hover:k-no-underline hover:k-bg-gray-700 hover:k-text-white k-border-l-0 k-border-r-0" >
                            <div className="avatar avatar-online avatar-sm">
                              <img src="../../images/profile/1.png" className="rounded-circle" alt=""   onClick={()=>{groupSelection(index)}} />
                            </div>
                            <div className="k-flex-shrink-0 k-flex-1">
                              <div className="flex-between k-space-x-2">
                                <p className="k-mb-0">Francisco Miles</p>
                                {item.selected?<svg  class="k-h-6 k-w-6 k-text-sky-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" ></path></svg> :null}
                              
                              </div>
                            </div>
                          </a>
                          )
                        })
                      }
                    </div>
                  </div>
                </main>
              );
            }
    
export default Newchatlist;