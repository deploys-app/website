export async function load ({ fetch }) {
	const resp = await fetch('https://api.deploys.app/billing.skus')
	const res = await resp.json()
	return {
		price: res.result
	}
}
