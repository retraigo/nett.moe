<template>
    <div class="relative overflow-visible font-archivo-narrow uppercase">
        <div id="menuButton" class="relative">
            <button class="bg-chaos-foreground p-2 w-12 h-12" @click="swapNav">
                <span :class="`sr-only`">Open menu</span>
                <svg :class="`block h-8 w-8 stroke-black stroke-2`" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 30 24">
                    <g>
                        <path :class="`transition-all duration-500 transform ease-in-out`" stroke-linecap="round"
                            stroke-linejoin="round" :d="navOpen ? `M4 6 L24 24` : `M4 6 L28 06`" />
                        <path :class="`transition-all duration-500 transform ease-in-out`" stroke-linecap="round"
                            stroke-linejoin="round" :d="navOpen ? `M4 6 L24 24` : `M4 14 L 20 14`" />
                        <path :class="`transition-all duration-500 transform ease-in-out`" stroke-linecap="round"
                            stroke-linejoin="round" :d="navOpen ? `M24 06 L 4 24` : `M04 22 L 28 22`
                                " />
                    </g>
                </svg>
            </button>
            <div
                :class="`flex flex-col items-stretch gap-[0.5rem] transition duration-500 ease-in-out ${navOpen ? `visible` : `invisible`}`">
                <div v-for="item, i in menu" :style="{ zIndex: 50 - i, transitionDelay: `${i * 0.1}s` }"
                    :class="`w-48 ml-[1rem] transition duration-500 ease-in-out ${subMenuOpen.some(x => x) ? `` : `w-48`} ${navOpen ? `translate-y-8` : `-translate-y-[100rem]`}`">
                    <button
                        :class="`flex items-center gap-2 p-[0.5rem] h-[3rem] transition-all duration-500 ease-in-out ${subMenuOpen.some(x => x) ? `justify-center max-w-[3rem] rounded-full` : `max-w-sm rounded-none`} w-full overflow-hidden border ${subMenuOpen[i] ? `bg-chaos-primary stroke-chaos-foreground border-chaos-foreground text-chaos-foreground` : `bg-chaos-foreground hover:bg-chaos-primary hover:border-chaos-foreground hover:text-chaos-foreground text-black stroke-black hover:stroke-chaos-foreground`}`"
                        @click="_ => swapSub(i)">
                        <svg :class="`block h-[1.5rem] w-[1.5rem] stroke-2`" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" :d="`${item.icon}`" />
                        </svg>
                        <span :class="`text-xs font-semibold uppercase ${subMenuOpen.some(x => x) ? `hidden` : `block`}`">{{
                            item.name }}</span>
                    </button>
                    <div :style="{ top: `-${i * 3.5}rem`, borderImage: `linear-gradient(to top, transparent, #ffcef1 20%, #ffcef1 80%, transparent) 0 0 0 1` }"
                        :class="`before:top-[${0.5 + i * 3.5}rem] submenu absolute border px-1 left-[5rem] top-0 flex flex-col items-stretch gap-2 transition duration-500 ease-in-out ${subMenuOpen[i] ? `translate-y-0` : `-translate-y-[100rem]`}`">
                        <div v-for="subItem, j in item.items"
                            :class="`relative w-48 transition duration-500 ease-in-out ${subMenuOpen[i] ? `translate-y-0` : `-translate-y-[100rem]`}`"
                            :style="{ transitionDelay: `${j * 0.1}s` }">
                            <a class="flex items-center gap-2 p-[0.5rem] h-[3rem] w-full text-black border transition-all duration-500 ease-in-out bg-chaos-foreground hover:bg-chaos-primary hover:border-chaos-foreground hover:text-chaos-foreground stroke-black hover:stroke-chaos-foreground"
                                :href="subItem.href" target="_blank">
                                <svg :class="`block h-8 w-8 stroke-1`" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" :d="`${subItem.icon}`" />
                                </svg>
                                <span class="text-xs font-semibold uppercase">{{ subItem.name }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden before:top-[0.5rem] before:top-[4rem] before:top-[7.5rem] before:top-[11rem] before:top-[14.5rem] before:top-[18rem] before:top-[21.5rem] before:top-[25rem] before:top-[28.5rem]" />
    </div>
</template>
<style>
.submenu:before {
    position: absolute;
    content: '';
    border-right: 1rem solid #ffcef1;
    border-top: 0.7rem solid transparent;
    border-bottom: 0.7rem solid transparent;
    left: -1rem;
}
</style>
<script setup lang="ts">
type MenuItem = { href: string, icon: string, name: string };
type SubMenu = { name: string, icon: string, items: MenuItem[] }

const { menu } = defineProps<{ menu: SubMenu[] }>()

const navOpen = ref(false);
const subMenuOpen = reactive(new Array(menu.length).fill(false))

function swapNav() {
    closeAllSub()
    navOpen.value = !navOpen.value
}

function swapSub(i: number) {
    const temp = !subMenuOpen[i]
    closeAllSub()
    subMenuOpen[i] = temp
}

function closeAllSub() {
    subMenuOpen.fill(false)
}

</script>