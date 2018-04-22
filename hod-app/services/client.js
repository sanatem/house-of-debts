import {HOD_API} from "../config/environment";

export default {
  /** This get the different debts for an user */
  getBalance(email) {
    console.log(email);
    return fetch(HOD_API+'/balance?username='+email)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  },

  /** This post a new deposit */
  postDeposit(body){
    fetch(HOD_API+'/deposit', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
  }

}
