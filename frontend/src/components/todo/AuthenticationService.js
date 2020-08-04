import axios from 'axios'

class AuthenticationService {

    executeBasicAuthService(username, pswd) {
        return axios.get('http://localhost:8080/basicauth', 
        {headers: {authorization: this.createBasicAuthToken(username,pswd)}})
    }

    createBasicAuthToken(username, pswd) {
        return 'Basic ' + window.btoa(username + ":" + pswd)
    }

    registerSuccessfulLogin(username,pswd) {
        
        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + pswd)

        // console.log('registerSuccessfulLogin');
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,pswd))
    }

    logout(username,pswd) {
        // console.log('logout');
        sessionStorage.removeItem('authenticatedUser', username);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false;
        return true;
    }

    getLoggedInUser() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ' ';
        return user;
    }

    setupAxiosInterceptors(basicAuthHeader) {
        
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            } 
        )
    }
}

export default new AuthenticationService();