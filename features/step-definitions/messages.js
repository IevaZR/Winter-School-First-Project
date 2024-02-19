import { Given, When, Then } from "@cucumber/cucumber";
import { browser, $ } from "@wdio/globals";

// we put this in a seperate file to group step definitions by topic
Then('I see a message {string}', async function (message) {
    const messageOnPage = await $('#flash')
    console.log(await messageOnPage.getText())
    // here we compare the message if it says the same as we expect it to say
    await expect(messageOnPage).toHaveText(expect.stringContaining(message))
});