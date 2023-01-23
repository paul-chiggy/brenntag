const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button*=Log in');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * define selectors using getter methods
     */
    get promptLogo () {
        return $('.welcome-header h3');
    }

    get vietnameseVersion () {
        return $('a*=Tiếng Việt');
    }

    get thaiVersion () {
        return $('a*=ภาษาไทย');
    }

    get chineseVersion () {
        return $('a*=繁體中文 (香港)');
    }

    get koreanVersion () {
        return $('a*=한국어');
    }

    get wrongCredsError () {
        return $('#error-element-password');
    }

    get noCredsError () {
        return $('*=Please fill in this field.');
    }

    get passwordResetLink () {
        return $('a*=Forgot password?');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('u/login/');
    }
}

module.exports = new LoginPage();
