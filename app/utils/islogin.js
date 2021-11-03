import showLog from "./logger";
import { updateUserAction,updateToken } from "../redux/actions/userActions";
import { getUserByParams } from "../api/api/callApi";

const isLogin = async(aT,udata) =>{
try {
 if(aT === "" || udata === {}){
 const accessToken = await localStorage.getItem("tgc-qxzsewa-access-token");
 const pemail = await localStorage.getItem("tgc-qxzsewa-email")
 updateToken(accessToken)
 const res = await getUserByParams({email:pemail})
 if(res){
    if(res.STATUS === "ERROR"){
    return false
  }
  else if(res === ""){
  return false
  }
  else if(res.STATUS === "SUCCESS"){
     updateUserAction(res.DATA[0])
    }
    return true
}
 }
 else{
   return true
 } 
} catch (error) {
 showLog("Login Check Error",error)   
}
}
export default isLogin;