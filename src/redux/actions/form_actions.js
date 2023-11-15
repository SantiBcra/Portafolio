
import { CHANGE} from "../types/form_types";

    



export default function change(lan) {
return async function (dispatch){

return dispatch({
  type: CHANGE,
  payload: lan
});

}

}




