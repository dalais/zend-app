export const userPostFetch = user => {
    return dispatch => {
        return fetch("http://"+ window.location.hostname +"/api/v1/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({user})
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    //Тут прописываем логику
                } else {
                    localStorage.setItem("token", data.jwt);
                    dispatch(loginUser(data.user))
                }
            })
    }
};

export const signupUser = userObj => ({
    type: 'SIGNUP_USER',
    payload: userObj
});