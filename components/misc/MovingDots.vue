<script setup lang="ts">
import { Points } from '~/utils/points';

const colors = ["#ffe6f9", "#ffb3ed", "#ff80e1", "#ff4dd5", "#ff1ac9"];
const arr = new Array(23).fill(null);
const _items: [number, number, string][] = [];
for (const _n in arr) {
    _items.push([
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        colors[Math.floor(Math.random() * colors.length)]
    ]);
}
const items = ref(_items as [number, number, string][]);

function distance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(Math.abs((x2 - x1) ** 2) - Math.abs((y2 - y1) ** 2));
}

const position = computed(() => {
    if (process.browser) {
        return [window.innerWidth, window.innerHeight]
    }
    return [0, 0]
})

function moveItems() {
    const __items: [number, number, string][] = [];
    const newPoint = Points[Math.floor(Math.random() * Points.length)]
    for (let n = 0; n < items.value.length; n += 1) {
        const point = newPoint.points[n]
        __items.push([
            point === "r" ? Math.floor(Math.random() * 100) : !point ? Math.floor(Math.random() * 100) : point[0],
            point === "r" ? Math.floor(Math.random() * 100) : !point ? Math.floor(Math.random() * 100) : point[1],
            colors[Math.floor(Math.random() * colors.length)]
        ]);
    }
    items.value = __items;
}

onMounted(() => {
    nextTick(() => {
        setTimeout(() => {
            moveItems()
            setInterval(() => {
                moveItems();
            }, 5000);
        }, 1000)
    })
})
</script>


<template>
    <svg width="100%" height="100%" class="fixed top-0 left-0 min-h-screen pointer-events-none">
        <g v-for="poss, i in items" :key="`bgItem-${i}`">
            <marker :id="`endLine${i}`" class="relative" viewBox="0 0 22 22" refX="10" refY="10"
                markerUnits="userSpaceOnUse" markerWidth="5" markerHeight="5">
                <circle class="transition-all duration-[5000ms] ease-in transform absolute -z-30 rounded-full" cx="10"
                    :stroke="poss[2]" :fill="poss[2]" cy="10" r="10px" />
            </marker>
            <marker :id="`startLine${i}`" class="relative" viewBox="0 0 22 22" refX="10" refY="10"
                markerUnits="userSpaceOnUse" markerWidth="5" markerHeight="5">
                <circle class="transition-all duration-[5000ms] ease-in transform absolute -z-30 rounded-full" cx="10"
                    :stroke="poss[2]" :fill="poss[2]" cy="10" r="10px" />
            </marker>
            <ClientOnly fallback-tag="span" fallback="Xue">
                <path :d="`${`M ${(position[0] * (poss[0])) / 100} ${(position[1] * (poss[1])) / 100}`} L ${(position[0] * (items[i + 1]?.[0] || poss[0])) / 100} ${position[1] * (items[i + 1]?.[1]
                    || poss[1]) / 100}`" stroke-width="0.5px" v-if="i !== items.length - 1"
                    :class="`opacity-50 transition-all duration-[5000ms] ease-in transform item${i || 99}`"
                    :stroke="poss[2]" :marker-end="`url(#endLine${i})`"
                    :marker-start="!i ? `url(#startLine${i})` : undefined" />
            </ClientOnly>
        </g>
    </svg>
</template>