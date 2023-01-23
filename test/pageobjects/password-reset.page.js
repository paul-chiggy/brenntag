const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PasswordResetPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('#email');
    }

    get btnContinue () {
        return $('button[type="submit"]');
    }

    get successMessage () {
        return $('h1*=Check Your Email');
    }
}

module.exports = new PasswordResetPage();
