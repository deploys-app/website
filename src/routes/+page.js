import { error } from '@sveltejs/kit'

export async function load ({ fetch }) {
	const resp = await fetch('https://api.deploys.app/billing.skus', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({})
	})
	const res = await resp.json()
	if (!res.ok) {
		throw error(res.error.message)
	}
	return {
		price: res.result
	}
}
