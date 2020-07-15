# How To Register Your Bot with Twitch (and why you should)

Twitch is currently looking for folks to register their bots to help better serve the development community. The extra features are:

1. Enables a rate limit of 50 messages in 30 seconds
2. Enables a whisper rate limit of 10 per second, up to 200 per minute; 500 accounts per day
3. Makes the bot exempt from whispers being dropped for being spam. The spam classifier is still run against these whispers, they may be marked as spam, and their spam status is logged for auditing purposes.
There is a form to fill out, however, you will need to know your bot’s Twitch ID (not the login name, a numerical ID), and we have links below to help you find that - also you MUST have 2FA enabled for the Bot Account, this has tripped up several people.

Again, please note that in order to qualify for this change, you must enable two factor authentication on the bot’s account.

That said, you are not required to register your bot, but, by doing so, you might be able to better serve not only the PhantomBot community but the Twitch bot development community as a whole. If you are having troubles whispering, your bot may have been shadowbanned. Please register your bot to have Twitch check it and see if that is the issue.

Twitch has provided a method for check for the is_known_bot flag to ensure that you have been approved. Use [Get Twitch Bot Status](http://illusionaryone.tv/botlookup/) to look up your bot’s Twitch ID and to check the status.

To request known bot status, please fill out the form at [Limit Increase | Twitch Developers](https://dev.twitch.tv/limit-increase), as follows:

- Select IRC Command and Message Rate as the service for which you want to request a limit.
- Instead of Client ID, enter your bot’s Twitch ID.
- Enter your bot request as the new limit.
After the form is reviewed, you will be emailed the results, typically within 3 business days.