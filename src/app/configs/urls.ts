import {environment} from "../../environments/environment";

const {API} = environment;

const urls = {
  episode:`${API}/episode`,
  character:`${API}/character`,
  location:`${API}/location`
}
export {
  urls
}
