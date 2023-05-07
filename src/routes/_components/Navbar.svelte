<script>
	import logo from '$lib/assets/logo.png'

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

	function toggle () {
		active = !active
	}

	function close () {
		active = false
	}
</script>

<svelte:window on:scroll={handleScroll} on:click={() => active = false}/>

<nav class="moon-navbar lo-container"
	class:navbar-fixed={fixed}
	on:click|stopPropagation={() => {}} aria-hidden="true">
	<div class="_dp-f _alit-ct _fw-w _jtfct-spbtw">
		<a href="/">
			<img src={logo} height="50" alt="Deploys.app">
		</a>
		<div class="navbar-toggle" on:click={toggle} on:keypress={toggle} tabindex="0" role="button">
			<div class="navbar-toggle-container">
				<i class="fa-regular fa-bars _fs-700"></i>
			</div>
		</div>
		<div class="navbar-menu-container" class:active={active}>
			<ul class="navbar-menus">
				<li class="navbar-menu">
					<a class="nav-link" href="/" on:click={close}>Home</a>
				</li>
				<li class="navbar-menu">
					<a class="nav-link" href="/#feature" on:click={close}>Features</a>
				</li>
				<li class="navbar-menu">
					<a class="nav-link" href="/#price" on:click={close}>Prices</a>
				</li>
				<li class="navbar-menu">
					<a class="nav-link" href="/privacy-policy">Privacy</a>
				</li>
				<li class="navbar-menu">
					<div class="_dp-f _jtfct-ct">
						<a class="moon-button _cl-light-primary nav-link -small" href="https://console.deploys.app" on:click={close}>Console</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</nav>
