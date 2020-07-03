class AuthenticationService {
    registerSuccessfulLogin(username,pswd) {
        console.log('registerSuccessfulLogin');
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout(username,pswd) {
        console.log('logout');
        sessionStorage.removeItem('authenticatedUser', username);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false;
        return true;
    }
}

export default new AuthenticationService();