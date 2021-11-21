import { red } from "@material-ui/core/colors";
import showLog from "../../utils/logger";
import API from "./api";
export const callPost = async (url, data) => {
  try {
    showLog("data", data);
    const res = await API.post(url, data);
    showLog("Request Success", res);
    var sdata = {
      STATUS: "SUCCESS",
      CODE: 200,
      DATA: res.data,
    };
    return sdata;
  } catch (error) {
    if (error.response) {
      var edata = {
        STATUS: "ERROR",
        CODE: error.response.status,
        DATA: error.response.data,
      };
      showLog("Request Failed", edata);
      return edata;
    } else if (error.request) {
      var edata = {
        STATUS: "ERROR",
        CODE: "",
        DATA: { message: "No response received from server !" },
      };
      showLog("NO Response", edata);
      return edata;
    } else {
      // Something happened in setting up the request that triggered an Error
      showLog("Error", error.message);
      return "";
    }
  }
};
