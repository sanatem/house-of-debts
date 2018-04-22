import {HOD_API} from "../config/environment";

export default {
  /** This get the different debts for an user */
  getBalance(email) {
    return fetch(HOD_API+'/balance?email='+email)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.balance;
    })
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
