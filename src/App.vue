<template lang="pug">
#app
	#navdrawerDefault2.navdrawer.navdrawer-right(aria-hidden='true', tabindex='-1')
		.navdrawer-content
			.navdrawer-header
				a.navbar-brand.px-0(href='#')
					i.fas.fa-chess-knight.fa-2x.mr-2
					| &nbsp; Daemonic Mnemonics

			nav.navdrawer-nav
				a.nav-item.nav-link(href='/dylan-thomas')
					i.fa.fa-sitemap.fa-lg.mr-2
					| &nbsp;Hyperactive

				a.nav-item.nav-link(href='/martin-amis')
					i.fa.fa-tv.fa-lg.mr-2
					| &nbsp; Dysphoria

				a.nav-item.nav-link(href='/')
					i.fa.fa-venus.fa-lg.mr-2
					| &nbsp; Function Junction

			.navdrawer-divider

			p.navdrawer-subheader Categorical Imperatives

			ul.navdrawer-nav
				li.nav-item
					a.nav-link(href='/')
						i.material-icons.mr-3 beach_access
						| Radical Mobility

				li.nav-item
					a.nav-link(href='#')
						i.material-icons.mr-3 pool
						| Disability

				li.nav-item
					a.nav-link(href='/dylan-thomas')
						i.material-icons.mr-3 directions_bike
						| Wheeled Motility

	nav.navbar.navbar-expand-lg.navbar-light.bg-light

		a.navbar-brand(href='#')
			i.fas.fa-sun.fa-2x.mr-1
			| Engenho Novo LLC

		button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarSupportedContent', aria-controls='navbarSupportedContent', aria-expanded='false', aria-label='Toggle navigation')
			span.navbar-toggler-icon

		#navbarSupportedContent.collapse.navbar-collapse
			ul.navbar-nav.mr-auto
				li.nav-item.active
					a.nav-link(href='#')
						| In Principio
						span.sr-only (current)

				li.nav-item
					a.nav-link(href='#') In Media Res

				li.nav-item.dropdown
					a#navbarDropdown.nav-link.dropdown-toggle(href='#', role='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')
						| Lista Suspensa

					.dropdown-menu(aria-labelledby='navbarDropdown')
						a.dropdown-item(href='/dylan-thomas')
							i.material-icons.md-24.mr-2 fastfood
							| Hambúrgueres

						a.dropdown-item(href='#')
							i.material-icons.md-24.mr-2 local_dining
							| Cachorros Quentes

						.dropdown-divider

						a.dropdown-item(href='#')
							i.material-icons.mr-2 restaurant
							| Burritos
						a.dropdown-item(href='#')
							i.material-icons.mr-2 menu
							| Enchiladas

						.dropdown-divider
						a.dropdown-item(href='#')
							i.material-icons.mr-2 translate
							| Peking Duck
						a.dropdown-item(href='#')
							i.material-icons.mr-2 g_translate
							| General Tso

			form.form-inline.my-2.my-lg-0
				input.form-control.mr-sm-2(type='search', placeholder='Pesquisar', aria-label='Search')

				button.btn.btn-raised.my-2.my-sm-0(type='submit') Buscapé

	main
		router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
	margin: 0;
}

#app {
	font-family: 'News Cycle', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

main {
	text-align: center;
	margin-top: 40px;
}

header {
	margin: 0;
	height: 56px;
	padding: 0 16px 0 24px;
	background-color: #35495E;
	color: #ffffff;
}

header span {
	display: block;
	position: relative;
	font-size: 20px;
	line-height: 1;
	letter-spacing: .02em;
	font-weight: 400;
	box-sizing: border-box;
	padding-top: 16px;
}

a.nav-link.active {
	color: firebrick;
}

</style>
