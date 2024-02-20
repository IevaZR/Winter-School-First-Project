import { Given, When, Then } from "@cucumber/cucumber";
import { browser, $ } from "@wdio/globals";
import page from "../page-objects/page.js";

// we removed this from authentication to group steps by type
Given("I am on {word} page", async function (pageName) {
    await page.open(pageName)
    // await browser.navigateTo(`https://the-internet.herokuapp.com/${page}`);
});