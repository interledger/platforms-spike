---
id: interfaces
title: Interfaces
slug: interfaces
sidebar_position: 5
---

<!-- Do not edit this file, it has been automatically generated by docusaurus-graphql-plugin -->

## Model

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Asset](objects#asset)
- [Peer](objects#peer)
- [PaymentPointer](objects#paymentpointer)
- [IncomingPayment](objects#incomingpayment)
- [OutgoingPayment](objects#outgoingpayment)
- [PaymentPointerKey](objects#paymentpointerkey)
- [WebhookEvent](objects#webhookevent)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## MutationResponse

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [CreatePaymentPointerMutationResponse](objects#createpaymentpointermutationresponse)
- [UpdatePaymentPointerMutationResponse](objects#updatepaymentpointermutationresponse)
- [TriggerPaymentPointerEventsMutationResponse](objects#triggerpaymentpointereventsmutationresponse)
- [AssetMutationResponse](objects#assetmutationresponse)
- [CreatePeerMutationResponse](objects#createpeermutationresponse)
- [UpdatePeerMutationResponse](objects#updatepeermutationresponse)
- [DeletePeerMutationResponse](objects#deletepeermutationresponse)
- [TransferMutationResponse](objects#transfermutationresponse)
- [LiquidityMutationResponse](objects#liquiditymutationresponse)
- [PaymentPointerWithdrawalMutationResponse](objects#paymentpointerwithdrawalmutationresponse)
- [CreatePaymentPointerKeyMutationResponse](objects#createpaymentpointerkeymutationresponse)
- [RevokePaymentPointerKeyMutationResponse](objects#revokepaymentpointerkeymutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>
