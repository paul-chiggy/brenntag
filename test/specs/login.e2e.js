const LoginPage = require('../pageobjects/login.page');
const PasswordResetPage = require('../pageobjects/password-reset.page');

describe('Verify login functionality', () => {

    beforeEach(async () => {
        await LoginPage.open()
        await LoginPage.promptLogo.isExisting();
    });

    describe('Verify login page availability in various locales', () => {

        it('Users should get the English version of the login page, when visiting web-app address', async () => {
            const expectedText = "ui_locales=en";    
            expect(browser).toHaveUrlContaining(expectedText);
            // do further assertion on page elements here
        });

        it('Users should get the Vietnamese version of the login page, when visiting web-app address and selecting Vietnamese version', async () => {
            const expectedText = "ui_locales=vi";
            await (await LoginPage.vietnameseVersion).click();
            expect(browser).toHaveUrlContaining(expectedText);
            // do further assertion on page elements here
        });

        it('Users should get the Thai version of the login page, when visiting web-app address and selecting Thai version', async () => {
            const expectedText = "ui_locales=th";
            await (await LoginPage.thaiVersion).click();
            expect(browser).toHaveUrlContaining(expectedText);
            // do further assertion on page elements here
        });

        it('Users should get the Hong Kong version of the login page, when visiting web-app address and selecting Hong Kong version', async () => {
            const expectedText = "ui_locales=zh";
            await (await LoginPage.chineseVersion).click();
            expect(browser).toHaveUrlContaining(expectedText);
            // do further assertion on page elements here
        });

        it('Users should get the Korean version of the login page, when visiting web-app address and selecting Korean version', async () => {
            const expectedText = "ui_locales=ko";
            await (await LoginPage.chineseVersion).click();
            expect(browser).toHaveUrlContaining(expectedText);
            // do further assertion on page elements here
        });

    });

    describe('Verify login credentials validation', () => {

        it('The web app should not login users, when users provide incorrect credentials', async () => {
            LoginPage.login('recruitment@digib.com','blablabla');
            const expectedErrorText = "Wrong email or password";
            var actualErrorText = await (await LoginPage.wrongCredsError).getText();
            expect(actualErrorText).toHaveText(expectedErrorText);
            await browser.saveScreenshot('./reports/html-reports/screenshots/incorrect-creds.png');
            // do further assertion on page elements here
        });

        it('The web app should not login users, when users provide no credentials', async () => {
            (await LoginPage.btnSubmit).click();
            expect(browser).toHaveUrlContaining('https://login.apac.brenntag.com/u/login');
            await browser.saveScreenshot('./reports/html-reports/screenshots/no-creds.png');
            // do further assertion on page elements here
        });

    });

    describe('Verify password reset functionality', () => {

        it('The web app should let users reset their password', async () => {
            await (await LoginPage.passwordResetLink).click();
            await (await PasswordResetPage.inputEmail).setValue('casey.lloyd.mgid@gmail.com');
            await (await PasswordResetPage.btnContinue).click();
            const expectedSuccessText = "Check Your Email";
            
            var actualSuccessText = await (await PasswordResetPage.successMessage).getText();
            expect(actualSuccessText).toHaveText(expectedSuccessText);
            // do further assertion on page elements here
        });

    });

});


