import { Given, When, Then } from "@cucumber/cucumber";
// import { Given, When, Then } from '@wdio/cucumber-framework' --> if the first one doesn't work
import { browser, $ } from "@wdio/globals";

Given("I am on Login page", async function () {
    await browser.navigateTo("https://the-internet.herokuapp.com/login");
});
When('I enter {string} username', async function (username) {
    await $("#username").setValue(username);
});

When('I enter {string} password', async function (password) {
    await $("#password").setValue(password);
});

When("I press on Login button", async function () {
    const button = await $("button[type=submit")
    await button.click()
});
Then('I see a message {string}', async function (message) {
    const messageOnPage = await $('#flash')
    console.log(await messageOnPage.getText())
    // here we compare the message if it says the same as we expect it to say
    await expect(messageOnPage).toHaveText(expect.stringContaining(message))
});

Then("I {word} see the Logout button", async function (visibility) {
    if (visibility === "do") {
        await expect($("i*=Logout")).toBeDisplayed()
    } else if (visibility === "don't") {
        await expect($("i*=Logout")).not.toBeDisplayed()
    } else {
        throw Error(`Visibility ${visibility} not supported`)
    }
});


// old version without Cucumber expressions
// Given("I am on Login page", async function () {
//     await browser.navigateTo("https://the-internet.herokuapp.com/login");
// });
// When('I enter a "tomsmith" username', async function () {
//     const usernameInput = await $("#username");
//     await usernameInput.setValue("tomsmith");
// });
// When('I enter a "dagjda" username', async function () {
//     const usernameInput = await $("#username");
//     await usernameInput.setValue("dagjda");
// });
// When('I enter a "SuperSecretPassword!" password', async function () {
//     const passwordInput = await $("#password");
//     await passwordInput.setValue("SuperSecretPassword!");
// });
// When('I enter a "dakhdakhd" password', async function () {
//     const passwordInput = await $("#password");
//     await passwordInput.setValue("dakhdakhd");
// });
// When("I press on Login button", async function () {
//     const button = await $("button[type=submit")
//     await button.click()
// });
// Then('I see a message "You logged into a secure area!"', async function () {
//     const message = await $('#flash')
//     console.log(await message.getText())
//     // here we compare the message if it says the same as we expect it to say
//     await expect(message).toHaveText(expect.stringContaining("You logged into a secure area!"))
// });
// Then('I see a message "Your username is invalid!"', async function () {
//     const message = await $('#flash')
//     console.log(await message.getText())
//     // here we compare the message if it says the same as we expect it to say
//     await expect(message).toHaveText(expect.stringContaining("Your username is invalid!"))
// });
// Then("I see the Logout button", async function () {
//     const logoutBtn = await $("i*=Logout")
//     await expect(logoutBtn).toBeDisplayed()

//     await browser.pause(5000); // instructs browser to wait
//     // await browser.debug() --> stops the execution for undefined time
// });
// Then("I don't see the Logout button", async function () {
//     const logoutBtn = await $("i*=Logout")
//     await expect(logoutBtn).not.toBeDisplayed()
//     // await expect(logoutBtn).not.toBeExisting()
// });
