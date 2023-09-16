---
layout: ../layouts/MdLayout.astro
title: Tools
description: Libraries and tools
---

# Libraries and Tools

## Testnet Wallets

**Rafiki Money**

A user-facing demo wallet that can make Interledger payments to a variety of peers (supports USD, testnet only). Sign up at [https://rafiki.money](https://rafiki.money/).

**RippleX Wallet**

A user-facing demo wallet that can make Interledger payments to a variety of peers (supports XRP, testnet only). Sign up at [https://wallet.ilpv4.dev](https://wallet.ilpv4.dev/).

## Connectors

**Java Connector**

An Interledger [Connector implemented in Java](https://connector.interledger4j.dev/). Not actively maintained, but the development team is open to hearing about [new feature requests](https://feedback.interledger4j.dev/).

**Javascript Connector**

An Interledger [Connector implemented in Javascript](https://github.com/interledgerjs/ilp-connector). This project has been battle-tested in various production deployments.

**Rust Connector**

An Interledger [Connector implemented in Rust](https://github.com/interledger-rs/interledger-rs). This project is not actively maintained, but has a robust feature-set and is easy to use.

## Libraries

**Interledger Java**

Build ILP applications that send and receive payments natively in Java using [Quilt](https://www.hyperledger.org/projects/quilt), which is a Java implementation of Interledger.

**Interledger RS**

Build ILP applications that send and receive payments natively in Rust using [interledger.rs](http://interledger.rs/), which is a Rust implementation of Interledger.

**ILP-over-HTTP**

Implementations of [ILP-over-HTTP](https://github.com/interledger/rfcs/blob/master/0035-ilp-over-http/0035-ilp-over-http.md), which is a bilateral communications protocol for server-to-server ILP connections.

- **Java**: [ILP-over-HTTP Link](https://github.com/hyperledger/quilt/tree/master/link-parent/link-ilp-over-http)
- **Rust**: [ILP-over-HTTP](https://github.com/interledger-rs/interledger-rs/tree/master/crates/interledger-http)
- **Javascript**: [ilp-plugin-http](https://github.com/interledgerjs/ilp-plugin-http)

**Interledger STREAM**

Reliably send packetized money and data over Interledger using [STREAM](https://github.com/interledger/rfcs/blob/master/0029-stream/0029-stream.md).

- **Java**: [STREAM Java](https://github.com/hyperledger/quilt/tree/master/stream-parent)
- **Rust**: [STREAM RS](https://github.com/interledger-rs/interledger-rs/tree/master/crates/interledger-stream)
- **Javascript**: [STREAM JS](https://github.com/interledgerjs/ilp-protocol-stream)
