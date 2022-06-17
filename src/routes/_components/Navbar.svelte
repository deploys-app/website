<script>
	import { onMount } from 'svelte'

	let active = false
	let fixed = false
	let scrolling = false

	function onScroll () {
		scrolling = false
		fixed = window.pageYOffset > 100
	}

	function handleScroll () {
		if (scrolling) {
			return
		}

		scrolling = true
		setTimeout(() => onScroll(), 150)
	}
</script>

<svelte:window on:scroll={handleScroll} on:click={() => active = false}/>

<nav class="moon-navbar lo-container"
	class:navbar-fixed={fixed}
	on:click|stopPropagation={() => {}}>
	<div class="_dp-f _alit-ct _fw-w _jtfct-spbtw">
		<a href="/">
			<img src="/images/logo.png" height="50" alt="Deploys.app">
		</a>
		<div class="navbar-toggle" on:click={() => active = !active}>
			<div class="navbar-toggle-container">
				<i class="fa-regular fa-bars _fs-700"></i>
			</div>
		</div>
		<div class="navbar-menu-container" class:active={active}>
			<ul class="navbar-menus">
				<li class="navbar-menu">
					<a class="nav-link" href="/" on:click={() => active = false}>Home</a>
				</li>
				<li class="navbar-menu">
					<a class="nav-link" href="/#feature" on:click={() => active = false}>Features</a>
				</li>
				<li class="navbar-menu">
					<a class="nav-link" href="/#price" on:click={() => active = false}>Prices</a>
				</li>
				<li class="navbar-menu">
					<a class="nav-link" href="/privacy-policy">Privacy</a>
				</li>
				<li class="navbar-menu" on:click={() => active = false}>
					<div class="_dp-f _jtfct-ct">
						<a class="moon-button _cl-light-primary nav-link -small" href="https://console.deploys.app" on:click={() => active = false}>Console</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</nav>
