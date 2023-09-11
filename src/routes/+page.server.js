import { error } from '@sveltejs/kit'

/**
 * @typedef {Object} BillingSkus
 * @prop {number} cpu
 * @prop {number} cpuUsage
 * @prop {number} memory
 * @prop {number} disk
 * @prop {number} egress
 * @prop {number} replica
 */

/**
 * @typedef {Object} BillingSkusResponse
 * @prop {boolean} ok
 * @prop {{ message: string }} error
 * @prop {BillingSkus} result
 */

export async function load ({ fetch }) {
	const resp = await fetch('https://api.deploys.app/billing.skus', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({})
	})

	/** @type {BillingSkusResponse} */
	const res = await resp.json()
	if (!res.ok) {
		throw error(500, res.error.message || 'Server error')
	}
	return {
		price: res.result
	}
}
