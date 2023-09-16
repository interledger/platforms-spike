---
layout: ../../layouts/MdLayout.astro
title: Manage Interledger Accounts Programmatically
---

# Manage Interledger Accounts Programmatically

Make payments programmatically on a testnet.

_Before starting this tutorial, make sure you have created accounts in both the Rafiki by following the instructions in the [Setup Wallets](https://interledger.org/setup-wallets.html)  tutorial._

_In addition, make sure you have created a programmable account in the RippleX Faucet at [ILPv4 Faucet](https://faucet.ilpv4.dev). Note that the RippleX wallet does not currently support programmability, so credentials from the ilpv4.dev faucet must be used instead._

To get started using Interledger, this tutorial helps you access the Interledger testnet programmatically. This Interledger testnet is currently maintained by teams at [RippleX](https://ripple.com/ripplex/)  and [Coil](https://coil.com/), but anyone can join. Note that all Interledger test networks use fake money, rather than transferring real value.

The RippleX and Rafiki testnet connectors, both used in this tutorial, together form a network for users to practice sending and receiving test currency values. Although this tutorial uses test XRP for simplicity, Interledger can handle transactions involving any currency pairs, as described in [Interledger Overview](https://interledger.org/overview.html).

In this tutorial, you will:

1.  [Check Your Balance](https://interledger.org/setup-wallets-programmatically.html#1-check-your-balance).
2.  [Pay a Friend](https://interledger.org/setup-wallets-programmatically.html#2-pay-a-friend) to another payment pointer.
3.  [Get Paid](https://interledger.org/setup-wallets-programmatically.html#3-get-paid).

### 1\. Check Your Balance

To programmatically see how much money is in your account, use the following [curl](https://curl.haxx.se/docs/manual.html)  call. Be sure to replace **`{your-account-id}`** and **`{auth_token}`** above with the values obtained from the [ILP Faucet portal](https://faucet.ilpv4.dev/).

```fish
curl --location
--request GET 'https://hermes-rest.ilpv4.dev/accounts/{your-random-faucet-account-id}/balance' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer {auth_token}'
```

This request will return a JSON response similar to the following:

```json
{
  "assetCode": "XRP",
  "assetScale": "9",
  "accountBalance": {
    "accountId": "caesar",
    "netBalance": "1000",
    "clearingBalance": "1000",
    "prepaidAmount": "1000"
  }
}
```

### 2\. Pay a Friend

You can use your account to send test funds to a different payment pointer. This example uses a destination payment pointer on [https://rafiki.money](https://rafiki.money/) . Substitute your `accountId` from Step 1. You can change the destination payment pointer if you prefer.

```fish
curl --location \
--request POST 'https://hermes-rest.ilpv4.dev/accounts/{your-random-faucet-account-id}/pay' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer {auth_token}' \
--data-raw '{
  "amount": "1000000",
  "destinationPaymentPointer": "$rafiki.money/p/{rafiki-email-address}"
}'
```

This request returns a JSON response similar to the following:

```json
{
  "originalAmount": "1000000",
  "amountDelivered": "1000000",
  "amountSent": "1000000",
  "successfulPayment": true
}
```

- **`originalAmount`**: The amount that you wanted to send.
- **`amountDelivered`**: The amount received by your friend, specified in the asset and units used by your friend.
- **`amountSent`** The amount you sent to your friend, specified in the asset and units of your account.

### 3\. Get Paid

Set up a RippleX testnet account and a rafiki.money account so you have two destination pointers to work with. Experiment with sending and receiving payments in both directions. Check your balance to make sure that the money has arrived in your account.

### Combine GUI and Programmatic Interactions

If you log in to your accounts at [rafiki.money](https://rafiki.money/)   you can directly see the results of the commands you performed above.
