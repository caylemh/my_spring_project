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

    getLoggedInUser() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ' ';
        return user;
    }
}

export default new AuthenticationService();