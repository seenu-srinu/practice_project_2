import React, { useContext } from "react";
import { HOST, TOKEN } from "../config";
import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import * as Actions from "../../state/Actions"

const Chatlist=()=>{
  const[chatList,setChatList]=useState([])
  const[userDict,setUserDict]=useState({})
  const{state,dispatch}=Actions.getStateDispatch(useContext)
  const{groupMembers}=state.userReducer
  console.log("state",state)
  let navigate=useNavigate();
  
  const user_id="13634"
  useEffect(()=>{
    userDictReq()
  },[])
const chatListReq=async ()=>{
  try{
let chatListProm=await fetch(HOST+"/chat_list/",{
  headers:{
    "token":TOKEN,
    "Content-Type":"application.json",
  }
})
let fetchedRes=await chatListProm.json()
console.log("fetchedResponse",fetchedRes)
setChatList(fetchedRes.result)
  }catch(error){
    console.log(error)
  }
}

const userDictReq=async ()=>{
  try{
 let userDictProm=await fetch(HOST+"/users_dict/",{
  headers:{
    "token":TOKEN,
    "Content-Type":"aplication.json",
  }
 })
 let res=await userDictProm.json()
 console.log("user_dict Res: ", res)

 setUserDict(res.result)
 console.log("added new key: ",res.result)
 dispatch(Actions.getStateDispatch("userReducer","groupMembers",res.result))
 chatListReq()
  }catch(error){
    console.log(error)
  }
}
    return( 
        <main class="container-fluid layout-wrapper">
        <div
          class="k-fixed k-top-0 k-bottom-0 k-right-0 k-z-[1120] k-h-screen k-w-full md:k-w-96 k-bg-gray-900 k-p-4 k-text-white k-shadow-2xl k-overflow-y-auto"
        >
          <div class="k-flex k-justify-between k-items-center k-mb-4">
            <p class="k-font-semibold mb-0 k-text-lg">Chat with Your Team</p>
            <div class="flex-between k-space-x-2">
              <div class="dropdown">
                <button
                  class="btn btn-link p-0 text-decoration-none text-white"
                  type="button"
                  id="profilechatdropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="avatar avatar-xs avatar-online">
                    <img
                      id="user-profile-image"
                      src="../../images/profile/1.png"
                      class="rounded-circle"
                      alt=""
                    />
                  </div>
                </button>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="profilechatdropdown"
                >
                  <a class="dropdown-item" href="#">
                    <i data-feather="check-circle" class="!k-text-emerald-500"></i> Set
                    as Online
                  </a>
                  <a class="dropdown-item" href="#">
                    <i data-feather="minus-circle"></i> Set as Away
                  </a>
                </div>
              </div>
              <button
                class="k-overflow-hidden k-rounded-full k-w-6 k-h-6 k-text-white k-bg-gray-900 k-appearance-none k-border-0 flex-center p-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  class="k-w-3 k-h-3"
                >
                  <path
                    d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="k-flex k-justify-between k-items-center k-mb-4 k-space-x-2">
            <input
              type="search"
              class="k-bg-gray-800 form-control border-0"
              placeholder="Search..."
            />
        
            <div class="dropdown">
              <button
                class="k-overflow-hidden k-rounded-full k-w-8 k-h-8 k-flex-shrink-0 k-text-white k-bg-gray-700 k-appearance-none k-border-0 flex-center p-0"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  class="k-w-4 k-h-4"
                >
                  <path
                    d="M204,128a12,12,0,0,1-12,12H64a12,12,0,0,1,0-24H192A12,12,0,0,1,204,128Zm28-60H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24Zm-80,96H104a12,12,0,0,0,0,24h48a12,12,0,0,0,0-24Z"
                  ></path>
                </svg>
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#">
                  <i data-feather="user"></i>
                  All Users</a
                >
                <a class="dropdown-item" href="#">
                  <i data-feather="check-circle" class="!k-text-emerald-500"></i> Online
                  Users</a
                >
                <a class="dropdown-item" href="#">
                  <i data-feather="users"></i>
                  Only Groups</a
                >
              </div>
            </div>
            <div class="dropdown">
              <button onClick={(e)=>{navigate("/Newchatlist")}}
                class="k-overflow-hidden k-rounded-full k-w-8 k-h-8 k-flex-shrink-0 k-text-white k-bg-gray-700 k-appearance-none k-border-0 flex-center p-0"
                data-toggle="dropdown"
              >
                <svg  onClick={()=>{navigate("/newChatlist")}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  class="k-w-4 k-h-4"
                >
                  <path
                    d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"
                  ></path>
                </svg>
              </button>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="profilechatdropdown"
              >
                <a class="dropdown-item" href="#">New Chat</a>
                <a class="dropdown-item" href="#">New Group Chat</a>
              </div>
            </div>
          </div>
          <div
            class="k-overflow-hidden k-rounded k-bg-gray-800 k-divide-y k-divide-solid k-divide-gray-700"
          >
           

            {
              chatList.map((item)=>{
                return(
                  <a
              class="k-relative k-px-4 k-py-3 flex-between k-space-x-4 k-text-white hover:k-no-underline hover:k-bg-gray-700 hover:k-text-white k-border-l-0 k-border-r-0"
              href="../../chat/single/"
            >
              <div class="avatar avatar-online">
                <img src="../../images/profile/1.png" class="rounded-circle" alt="" />
              </div>
              <div class="k-flex-shrink-0 k-flex-1">
                <div class="flex-between k-space-x-2">
                  <p class="k-mb-0">{item.members_info.filter((i)=>i.member!=user_id).map((item)=>userDict[item.member].displayName).join()}</p>
                  <p class="k-mb-0 k-text-gray-400">18:14</p>
                </div>
                <div class="flex-between k-space-x-2">
                  <p class="k-mb-0 k-text-gray-400 k-overflow-ellipsis">
                    {item.metadata.last_message}
                  </p>
                  <span
                    class="k-text-xs k-px-1 k-text-white k-rounded-full k-bg-rose-600 k-flex k-ml-1 k-flex-shrink-0"
                    >4</span
                  >
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

export default Chatlist;