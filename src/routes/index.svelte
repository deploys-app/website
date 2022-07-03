<script context="module">
	export async function load ({ fetch }) {
		const resp = await fetch('https://api.deploys.app/billing.skus')
		const res = await resp.json()
		return {
			props: {
				price: res.result
			}
		}
	}
</script>

<script>
	export let price = {}
	const perMonth = 60 * 60 * 24 * 30

	function format (v, d) {
		return v.toLocaleString(undefined, { maximumFractionDigits: d })
	}
</script>

<section class="section section-hero">
	<div class="lo-container">
		<div class="lo-12 lo-6-md _gg-32px">
			<div class="_dp-f _fdrt-cl _jtfct-ct">
				<h1 class="_fw-700 _fs-1300-lg _fs-1100 _cl-white _mgbt-16px">
					Deploy and run containers!
				</h1>
				<p class="_fs-500 _fw-500 _cl-white _mgbt-48px">Deploys.app is a platform as a service based on Kubernetes for run containers on the cloud.</p>
				<a class="moon-button _als-fst-lg _als-ct" href="/#price">Get your plans</a>
			</div>
			<div class="_mgt-16px">
				<img class="_w-100pct" src="/images/database.svg" alt="Server Architecture">
			</div>
		</div>
	</div>
</section>
<section class="section section-feature" id="feature">
	<div class="lo-container">
		<h2 class="_fw-700 _fs-1000 _fs-1100-lg _cl-neutral-500 _tal-ct _mgbt-16px">
			Designed for developers.
			<br>
			Built for business.
		</h2>
		<div class="lo-12 lo-6-md lo-4-lg _gg-16px">
			<div class="fancy-box">
				<div class="fancy-icon">
					<i class="fa-light fa-server"></i>
				</div>
				<h3 class="_cl-neutral-500 _fw-700 _mgbt-18px _fs-700">Web Service</h3>
				<p class="_fw-500 _cl-dark-secondary">Running service that expose HTTPS to the internet.</p>
			</div>
			<div class="fancy-box">
				<div class="fancy-icon">
					<i class="fa-light fa-database"></i>
				</div>
				<h3 class="_cl-neutral-500 _fw-700 _mgbt-18px _fs-700">TCP Service</h3>
				<p class="_fw-500 _cl-dark-secondary">Running internal TCP service.</p>
			</div>
			<div class="fancy-box">
				<div class="fancy-icon">
					<i class="fa-light fa-microchip"></i>
				</div>
				<h3 class="_cl-neutral-500 _fw-700 _mgbt-18px _fs-700">Worker</h3>
				<p class="_fw-500 _cl-dark-secondary">Running background worker service.</p>
			</div>
			<div class="fancy-box">
				<div class="fancy-icon">
					<i class="fa-light fa-suitcase"></i>
				</div>
				<h3 class="_cl-neutral-500 _fw-700 _mgbt-18px _fs-700">Cron Job</h3>
				<p class="_fw-500 _cl-dark-secondary">Running service with start scheduler.</p>
			</div>
			<div class="fancy-box">
				<div class="fancy-icon">
					<i class="fa-light fa-disc-drive"></i>
				</div>
				<h3 class="_cl-neutral-500 _fw-700 _mgbt-18px _fs-700">Stateful and Stateless</h3>
				<p class="_fw-500 _cl-dark-secondary">Support both stateless and stateful service with SSD.</p>
			</div>
			<div class="fancy-box">
				<div class="fancy-icon">
					<i class="fa-brands fa-cloudflare"></i>
				</div>
				<h3 class="_cl-neutral-500 _fw-700 _mgbt-18px _fs-700">DDoS Protection</h3>
				<p class="_fw-500 _cl-dark-secondary">All domains protected by Cloudflare Enterprise.</p>
			</div>
		</div>
	</div>
</section>
<section class="section _pdv-48px _pdv-70px-lg">
	<div class="lo-container">
		<div class="lo-12 lo-6-md _gg-24px">
			<div>
				<img class="dp-b _mgh-at _w-100pct" src="/images/business1.png" alt="Business">
			</div>
			<div>
				<h2 class="_fw-700 _fs-1000 _fs-1100-lg _cl-neutral-500 _mgbt-16px">
					Solutions for Your small
					<br>
					business
				</h2>
				<p class="_cl-neutral-500 _mgbt-32px">
					Running containers in shared Kubernetes nodes to reduce infrastructure cost.
				</p>
				<div class="fancy-box-2 _mgbt-24px">
					<div class="fancy-icon">
						<i class="fa-regular fa-coins"></i>
					</div>
					<div class="fancy-body">
						<h4 class="_fw-500 _cl-neutral-500 _mgbt-8px">Pay as you go</h4>
						<p class="_cl-neutral-500">Pay only resource you use, not whole server.</p>
					</div>
				</div>
				<div class="fancy-box-2 _mgbt-24px">
					<div class="fancy-icon">
						<i class="fa-regular fa-repeat-alt"></i>
					</div>
					<div class="fancy-body">
						<h4 class="_fw-500 _cl-neutral-500 _mgbt-8px">Move faster</h4>
						<p class="_cl-neutral-500">Deploys.app CLI can be use in CI/CD system to automated deploy.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="section _pdv-48px _pdv-70px-lg">
	<div class="lo-container">
		<div class="lo-12 lo-6-md _gg-24px">
			<div class="_od-2 _od-1-lg">
				<h2 class="_fw-700 _fs-1000 _fs-1100-lg _cl-neutral-500 _mgbt-16px">
					Solutions for Your big
					<br>
					business
				</h2>
				<p class="_cl-neutral-500 _mgbt-32px">
					Separate workloads on your own nodes.
				</p>
				<div class="fancy-box-2 _mgbt-24px">
					<div class="fancy-icon">
						<i class="fa-light fa-tags"></i>
					</div>
					<div class="fancy-body">
						<h4 class="_fw-500 _cl-neutral-500 _mgbt-8px">Allocated resources</h4>
						<p class="_cl-neutral-500">Allocated resources to not shared with anyone. And can also reduce price.!</p>
					</div>
				</div>
				<div class="fancy-box-2 _mgbt-24px">
					<div class="fancy-icon">
						<i class="fa-light fa-server"></i>
					</div>
					<div class="fancy-body">
						<h4 class="_fw-500 _cl-neutral-500 _mgbt-8px">Bring your own Kubernetes</h4>
						<p class="_cl-neutral-500">Deploys.app Agent can run on your Kubernetes cluster.</p>
					</div>
				</div>
			</div>

			<div class="_od-2-lg _od-1">
				<img class="dp-b _mgh-at _w-100pct" src="/images/business2.png" alt="Business">
			</div>
		</div>
	</div>
</section>
<section class="section _pdv-70px _bgcl-neutral-700">
	<div class="lo-container">
		<div class="lo-12 lo-6-md _gg-24px">
			<div>
				<img class="dp-b _mgh-at _w-100pct" src="/images/action_img.png" alt="Business">
			</div>
			<div class="_dp-f _fdrt-cl _jtfct-ct">
				<h2 class="_fw-700 _fs-1000 _fs-1100-lg _cl-white _mgbt-16px">
					Deploy to multiple regions
				</h2>
				<p class="_cl-white _mgbt-32px">
					Deploys your workloads to any regions. (will available more in the future)
				</p>
				<a class="moon-button _als-fst" href="https://console.deploys.app">Get Start</a>
			</div>
		</div>
	</div>
</section>
<section class="section section-plan" id="price">
	<div class="lo-container">
		<div>
			<h2 class="_fw-700 _tal-ct _fs-1100 _fs-1300-lg _cl-neutral-500 _mgbt-16px">
				Check out plans,
				<br>
				And running a container now
			</h2>
			<p class="_cl-neutral-500 _tal-ct _mgbt-32px">
				Pay as you go without minimum cost.!<br>
				All prices VAT included.
			</p>
		</div>
		<div>

			<div class="moon-table-container">
				<table class="moon-table">
					<thead>
					<tr>
						<th class="_tal-ct">RESOURCE</th>
						<th class="_tal-ct">VALUE</th>
						<th class="_tal-ct">PRICE</th>
						<th class="_tal-ct">FREE TIER<br>(Daily)</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td class="_tal-ct _cl-neutral-400"><strong>CPU</strong></td>
						<td class="_tal-ct _cl-neutral-400">1s CPU time</td>
						<td class="_tal-ct _cl-neutral-400">
							<div><strong>฿{format(price.cpuUsage * perMonth, 2)}/mo</strong></div>
							<div>฿{format(price.cpuUsage, 10)}/s</div>
						</td>
						<td class="_tal-ct _cl-neutral-400"><strong>{format(8640)} s</strong></td>
					</tr>
					<tr>
						<td class="_tal-ct _cl-neutral-400"><strong>Memory</strong></td>
						<td class="_tal-ct _cl-neutral-400">Shared</td>
						<td class="_tal-ct _cl-neutral-400">
							<div><strong>Free</strong></div>
						</td>
						<td class="_tal-ct _cl-neutral-400">-</td>
					</tr>
					<tr>
						<td class="_tal-ct _cl-neutral-400"><strong>Allocated Memory</strong></td>
						<td class="_tal-ct _cl-neutral-400">1 GiB</td>
						<td class="_tal-ct _cl-neutral-400">
							<div><strong>฿{format(price.memory * perMonth, 2)}/mo</strong></div>
							<div>฿{format(price.memory, 10)}/s</div>
						</td>
						<td class="_tal-ct _cl-neutral-400">-</td>
					</tr>
					<tr>
						<td class="_tal-ct _cl-neutral-400"><strong>SSD Disk</strong></td>
						<td class="_tal-ct _cl-neutral-400">1 GiB</td>
						<td class="_tal-ct _cl-neutral-400">
							<div><strong>฿{format(price.disk * perMonth, 2)}/mo</strong></div>
							<div>฿{format(price.disk, 10)}/s</div>
						</td>
						<td class="_tal-ct _cl-neutral-400">-</td>
					</tr>
					<tr>
						<td class="_tal-ct _cl-neutral-400"><strong>Replica</strong></td>
						<td class="_tal-ct _cl-neutral-400">1</td>
						<td class="_tal-ct _cl-neutral-400">
							<div><strong>฿{format(price.replica * perMonth, 2)}/mo</strong></div>
							<div>฿{format(price.replica, 10)}/s</div>
						</td>
						<td class="_tal-ct _cl-neutral-400"><strong>{format(216000)} s</strong></td>
					</tr>
					<tr>
						<td class="_tal-ct _cl-neutral-400"><strong>Egress Bandwidth</strong></td>
						<td class="_tal-ct _cl-neutral-400">1 GiB</td>
						<td class="_tal-ct _cl-neutral-400">
							<div><strong>฿{format(price.egress, 2)}</strong></div>
						</td>
						<td class="_tal-ct _cl-neutral-400">
							<div><strong>{format(1)} GiB</strong> <span class="_fs-100">Uncached</span></div>
							<div><strong>{format(1)} GiB</strong> <span class="_fs-100">Cached</span></div>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</section>
<section class="section section-cta">
	<div class="lo-container">
		<div class="lo-12 lo-8-4-md">
			<div class="_dp-f _fdrt-cl _jtfct-ct">
				<h4 class="_fw-700 _tal-ct _fs-900 _fs-1100-lg _cl-white _mgbt-16px">
					Start growing with Deploys.app today!
				</h4>
				<p class="_cl-white _tal-ct">30-day moneyback guarantee. No questions asked.</p>
			</div>
			<div class="_dp-f _fdrt-cl _jtfct-ct _mgt-16px _mgt-0px-lg">
				<a class="moon-button _als-ct _als-fe-lg _cl-primary-500 _bgcl-white" href="mailto:contact@moonrhythm.io">Contact us</a>
			</div>
		</div>
	</div>
</section>
