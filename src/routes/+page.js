export async function load ({ fetch }) {
	const resp = await fetch('https://api.deploys.app/billing.skus', {
		// workaround for ssr fetch not sending origin but verify cors response headers
		headers: {
			origin: 'localhost'
		}
	})
	const res = await resp.json()
	return {
		price: res.result
	}
}
