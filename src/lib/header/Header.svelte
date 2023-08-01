<script lang="ts">
	let sidebarOpen = false;

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}
</script>

<header class="primary-header">
	<a href="/" class="logo-anchor" aria-label="Home">
		<img src="favicon.png" alt="Petal Quest logo" class="logo-img" />
		<span class="logo-txt">Petal Quest</span>
	</a>

	<nav class="primary-navigation" class:sidebar={sidebarOpen}>
		<ul class="nav-list" class:sidebar={sidebarOpen}>
			<li>
				<a href="/prismatic-dragons">Prismatic Dragons</a>
			</li>
			<li>
				<a href="/dragon-builder">Dragon Builder</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
		</ul>

		<button class="hamburger-button" on:click={toggleSidebar}>
			<svg class:sidebar={sidebarOpen} viewBox="0 0 80 80">
				<rect class="hamburger-line-top" fill="currentColor" y="0" width="80" height="10" rx="2" />
				<rect class="hamburger-line-mid" fill="currentColor" y="35" width="80" height="10" rx="2" />
				<rect class="hamburger-line-bot" fill="currentColor" y="70" width="80" height="10" rx="2" />
			</svg>
		</button>
	</nav>
</header>

<style lang="scss">
	$inactiveTextColor: #eee;
	$hoverTextColor: #fff;
	$hoverBackgroundColor: #53902b;

	$logoHeight: 40px;
	$logoVerticalPadding: 6px;
	$totalHeaderHeight: $logoHeight + 2 * $logoVerticalPadding;

	$navFontSize: 16px;
	$navFontVerticalPadding: 0.5 * ($totalHeaderHeight - $navFontSize);

	$hamburgerHeight: 24px;
	$hamburgerVerticalPadding: 0.5 * ($totalHeaderHeight - $hamburgerHeight);

	$logoWidth: $logoHeight;
	$logoHorizontalPadding: 12px;
	$navButtonsHorizontalPadding: $logoHorizontalPadding;
	$hamburgerHorizontalPadding: $logoHorizontalPadding;
	$hamburgerWidth: $hamburgerHeight;
	$hamburgerButtonWidth: $hamburgerWidth + 2 * $hamburgerHorizontalPadding;

	// Start of hardcoded width values which need rechecking.
	$logoTextWidth: 84px;
	$navTextWidth: 131px + 107px + 42px;
	$numNavElements: 3;
	// End of hardcoded width values.

	$logoOverallWidth: $logoWidth + $logoTextWidth + 3 * $logoHorizontalPadding;
	$navOverallWidth: $navTextWidth + $numNavElements * 2 * $navButtonsHorizontalPadding;
	$headerOverallWidth: $logoOverallWidth + $navOverallWidth;

	$navToHamburgerThresholdWidth: $headerOverallWidth + $hamburgerButtonWidth + 4px;

	$logoTextRemovalThresholdWidth: $logoOverallWidth + $hamburgerButtonWidth + 20px;

	.primary-header {
		display: flex;
		align-items: center;
		background-color: rgb(28, 28, 28);
		overflow: hidden;
	}

	.logo-anchor {
		line-height: 0;
		display: flex;
		align-items: center;
		text-decoration: none;
		color: $inactiveTextColor;

		@media (hover: hover) {
			&:hover {
				background-color: $hoverBackgroundColor;
				color: $hoverTextColor;
			}
		}
	}

	.logo-img {
		height: $logoHeight;
		width: $logoWidth;
		padding: $logoVerticalPadding $logoHorizontalPadding;
		padding-right: 0.5 * $logoHorizontalPadding;
	}

	.logo-txt {
		font-size: $navFontSize;
		white-space: nowrap;
		padding: $navFontVerticalPadding $logoHorizontalPadding;
		padding-left: 0.5 * $logoHorizontalPadding;
	}

	.primary-navigation {
		display: flex;
		margin-left: auto;
		margin-right: 0;
	}

	.hamburger-button {
		display: none;

		background: none;
		color: $inactiveTextColor;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;

		height: $hamburgerHeight + 2 * $hamburgerVerticalPadding;

		svg {
			color: inherit;
			height: $hamburgerHeight;
			width: $hamburgerWidth;
			padding: $hamburgerVerticalPadding $hamburgerHorizontalPadding;

			rect {
				transform-origin: center;
				transition: transform 0.25s;
			}

			&.sidebar {
				.hamburger-line-top {
					transform: rotate(45deg) translate(0px, 35px);
				}
				.hamburger-line-mid {
					opacity: 0;
				}
				.hamburger-line-bot {
					transform: rotate(-45deg) translate(0px, -35px);
				}
			}
		}

		@media (hover: hover) {
			&:hover {
				background-color: $hoverBackgroundColor;
				color: $hoverTextColor;
			}
		}
	}

	.nav-list {
		margin: 0;
		padding: 0;
		font-size: $navFontSize;
		list-style-type: none;

		li {
			float: left;

			a {
				color: $inactiveTextColor;
				padding: $navFontVerticalPadding $navButtonsHorizontalPadding;
				text-decoration: none;
				white-space: nowrap;

				box-sizing: content-box;
				display: inline-block;
				height: $navFontSize;

				@media (hover: hover) {
					&:hover {
						background-color: $hoverBackgroundColor;
						color: $hoverTextColor;
					}
				}
			}
		}
	}

	@media screen and (max-width: $navToHamburgerThresholdWidth) {
		.nav-list li {
			display: none;
		}
		.hamburger-button {
			display: block;
		}

		.nav-list.sidebar li {
			display: block;
		}
	}

	@media screen and (max-width: $logoTextRemovalThresholdWidth) {
		.logo-txt {
			display: none;
		}
	}
</style>
