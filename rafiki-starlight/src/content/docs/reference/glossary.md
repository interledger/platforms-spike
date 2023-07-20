---
title: Glossary
---

## Account Servicing Entity

An Account Servicing Entity provides and maintains a payment account for a payer and payee, and is a regulated entity in the country/countries it operates.

## Asset

An Asset consists of two pieces of information, code and scale. The asset code SHOULD be an [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217). The asset scale is the difference in orders of magnitude between the standard unit and a corresponding fractional unit.

## Grant Negotiation Authorization Protocol

The Grant Negotiation Authorization Protocol (GNAP) defines a mechanism for delegating authorization to a piece of software, and conveying the results and artifacts of that delegation to the software. This delegation can include access to a set of APIs as well as subject information passed directly to the software. For more information, see the [specification](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol-12).

## Interledger Protocol

Interledger is a protocol for sending packets of money across different payment networks or ledgers. For more details, see the [documentation](https://interledger.org/developer-tools/get-started/overview/) and the [specification](https://interledger.org/rfcs/0027-interledger-protocol-4/).

## Open Payments

Open Payments is an API standard that allows third-parties (with the account holder's consent) to initiate payments and to view the transaction history on the account holder's account. For more details, see the [Open Payments website](https://openpayments.guide).

## Payment Pointer

A Payment Pointer is a standardized identifier for a payment account. In the same way that an email address provides an identifier for a mailbox in the email ecosystem, a payment pointer is used by an account holder to share the details of their account with a counter-party. For more details, see the [documentation](https://paymentpointers.org/).

## Peer

A Peer is a counterparty that a given party transacts with. Within the [Interledger Protocol](#interledger-protocol), connectors maintain peers, or counterparty connectors whom they transact with. For more information, see [the peering documentation](../concepts/interledger-protocol/peering.md).

## Simple Payments Setup Protocol (SPSP)

The Simple Payments Setup Protocol is a basic protocol for exchanging payment information between payee and payer to facilitate payment over Interledger. For more details, see the [SPSP specification](https://interledger.org/rfcs/0009-simple-payment-setup-protocol).

## STREAM

STREAM is a multiplexed Interledger Transport Protocol that provides for sending multiple “streams” of money and data between two parties using ILP. For more details, see the [STREAM specification](https://interledger.org/rfcs/0029-stream/).

## TigerBeetle

TigerBeetle is a distributed financial accounting database designed for mission critical safety and performance. For more information, see the [official website](https://tigerbeetle.com/).

## Web Monetization

Web Monetization is a JavaScript browser API that allows the creation of a payment stream from the user agent to the website. For more details, see the [Web Monetization Website](https://webmonetization.org/).
