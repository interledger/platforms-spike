---
layout: ../../layouts/MdLayout.astro
title: Get Started With Interledger Accounts
---

# Get Started With Interledger Accounts

Make payments on a testnet.

To get started using Interledger, we'll walk through using a test network, which uses fake money, rather than transferring real value. This Interledger testnet is currently maintained by teams at [RippleX](https://ripple.com/ripplex/)  and [Coil](https://coil.com/), but anyone can join.

The RippleX and Rafiki testnet connectors, both used in this tutorial, together form a network for users to practice sending and receiving test currency values.

With Interledger, all currency pairs that senders and receivers use are supported. For simplicity, this tutorial demonstrates sending and receiving test XRP only, but in practice senders and receivers can use different currencies.

This tutorial describes two ways to create an Interledger account to send and receive test funds:

- With an [ilpv4.dev](https://wallet.ilpv4.dev/)  account
- With a [rafiki.money](https://rafiki.money/)  account

Both of these types of Interledger accounts allow you to send and receive test funds, and are useful for developing and testing apps. These types of accounts can also be referred to as "wallet" accounts.

You can also interact with these wallets programmatically. See [Manage Interledger programmaticallly](https://interledger.org/developer-tools/get-started/manage-accounts/).

If you want to send *actual* value in your app with an Interledger account, refer to the following open-source projects (contributions welcome):

- [Java Connector](https://connector.interledger4j.dev/)  — Not actively maintained, but the development team is open to hearing about [new feature requests](https://feedback.interledger4j.dev/).
- [Rust Connector](http://interledger.rs/)  — Not actively maintained, but recommended to get started for its ease of use and feature-set.
- [Javascript Connector](https://github.com/interledgerjs/ilp-connector)  — Battle-tested in production.

### 1\. Create Interledger Wallet Accounts

For this tutorial, you should create both a RippleX and rafiki.money wallet account.

#### CREATE A RIPPLEX ACCOUNT

1.  Navigate to [https://wallet.ilpv4.dev](https://wallet.ilpv4.dev) and click `Sign in`.
2.  NOTE: Only use Github login!

#### CREATE AN ACCOUNT AT HTTPS://RAFIKI.MONEY

The [rafiki.money](https://rafiki.money/)  site also allows you to create an Interledger-enabled wallet that is compatible with the testnet wallet provided by RippleX. Use the following instructions to get setup:

1.  Open [rafiki.money](https://rafiki.money/) .
2.  Click **Create an account** and follow the instructions.
3.  Click **Add account** and enter a name for your account to create a new one. You can create multiple accounts if you want.
4.  Click **No default account set for Payment pointer. Click here to assign default account**.
5.  From the **Default Account** dropdown list, select an account and click **Submit**
6.  Notice that you can send test XRP from any of these accounts, but the default account will be the recipient of any incoming testnet funds sent from another account.

### 2\. Locate Your Own Payment Pointer

1.  In each wallet, you will see a page with a payment pointer in the following formats: `$money.ilpv4.dev/{your-account-name}` (RippleX Wallet) and `rafiki.money/p/{user-id}` (Rafki Money). As indicated by the payment pointer, each wallet is Interledger-enabled.
2.  To add funds to your Rafki wallet, click the `Add Funds` button.
3.  To add funds to your RippleX wallet, click the `Make it rain` button.
4.  If you want someone to pay you, provide them with your payment pointer. That's it!

Note that when you subsequently log in to either testnet account, you will see the current state of your wallet with the current amount of test XRP. Your accounts can receive test XRP when you are not logged in.

### 3\. Send Money Between Interledger Wallets

Once you have testnet funds in one of your wallets, you can send those funds to any other Interledger-enabled wallet.

1.  Use the RippleX Wallet you created earlier at [https://wallet.ilpv4.dev](https://wallet.ilpv4.dev).
2.  Decide the amount of XRP that you want to send.
3.  Decide to which payment pointer you want to send test XRP to (hint: try one from [https://rafiki.money](https://rafiki.money/) ).
4.  Click **Send**.

The amount of test XRP in the sender account adjusts to the new value. At the same time, if you have your rafiki.money wallet account open in another tab, you will see your balance in that wallet account go up.

Next, send the money back via the following steps:

1.  On the rafiki.money home page, click the account you want to use to send test XRP.
2.  Click **Send** button (found in the upper-left of the screen).
3.  Enter your RippleX **Payment Pointer**, the **Amount (XRP)**, and click **Send**.

Experiment with sending and receiving test funds between payment pointers on different sites, adding more test funds to your accounts as desired. In this tutorial, there are no transaction costs for sending and receiving test funds, but a different Interledger implementation could impose transaction costs.
