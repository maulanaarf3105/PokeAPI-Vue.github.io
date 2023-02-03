<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar>
				<q-toolbar-title> PokeAPI </q-toolbar-title>
			</q-toolbar>
		</q-header>

		

		<q-page-container class="bg-grey-2">
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
	import EssentialLink from 'components/EssentialLink.vue'
	import { defineComponent, ref } from 'vue'

	export default defineComponent({
		name: 'MainLayout',

		components: {
			EssentialLink,
		},

		setup() {
			const leftDrawerOpen = ref(false)

			return {
				leftDrawerOpen,
				toggleLeftDrawer() {
					leftDrawerOpen.value = !leftDrawerOpen.value
				},
			}
		},
	})
</script>

