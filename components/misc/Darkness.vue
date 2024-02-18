<!--
    Credits: Pranev (aka) NeTT
    Github: https://github.com/retraigo
    Discord: https://discord.gg/A69vvdK
-->
<template>
    <div class="">
        <div ref="topcontainer" class="top-container group">
            <div class="main-content fixed inset-0 top-0 left-0 w-full h-screen z-30" @mousemove="movedaro"
                @touchmove="touchdaro" @mouseenter="() => (isTouched = true)" @mouseleave="onLeave"
                @touchstart="() => (isTouched = true)" @touchend="onLeave">
                <div :class="`movingPointer transition-opacity duration-500`" ref="movingthing"
                    :style="{ left: coordinates.x - 60 + 'px', top: coordinates.y - 260 + 'px', }" />
            </div>
            <div class="relative z-20">
                <div ref="midtext"
                    class="midtext text-5xl lg:text-6xl lg:mt-16 xl:text-8xl transition-all duration-500 ease-in-out mt-12">
                    <span class="font-cinzel tracking-wider">Pranev (NeTT)</span>
                </div>
                <div ref="midlogo"
                    :style="{ maskImage: `radial-gradient(circle at ${coordinates.x}px ${coordinates.y}px, black 20%, transparent 100%)` }"
                    class="midtext transition-all duration-500 ease-in-out mt-8">
                    <div class="flex flex-col items-center mx-auto">
                        <img src="/nettdoru.webp"
                            class="w-60 md:w-96 p-5 transition duration-500 ease-in-out transform hover:scale-110" />
                    </div>
                    <p class="p-2">
                        I'm Pranev, aka NeTT, a college student who makes random JavaScript programs in my free time. I
                        usually
                        make websites and web apps using Vue and Nuxt.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.midtext {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffcef1;
    pointer-events: none;
    font-weight: 600;
    bottom: 0;
    left: 0;
    right: 0;
    widows: 100%;
    text-align: center;
    z-index: 30;
}

.midlogo.animate {
    animation: shake 0.5s;
}

@keyframes shake {
    0% {
        transform: translate(1px, 1px) rotate(0deg);
    }

    10% {
        transform: translate(-1px, -2px) rotate(-1deg);
    }

    20% {
        transform: translate(-3px, 0px) rotate(1deg);
    }

    30% {
        transform: translate(3px, 2px) rotate(0deg);
    }

    20% {
        transform: translate(1px, -1px) rotate(1deg);
    }

    50% {
        transform: translate(-1px, 2px) rotate(-1deg);
    }

    60% {
        transform: translate(-3px, 1px) rotate(0deg);
    }

    70% {
        transform: translate(3px, 1px) rotate(-1deg);
    }

    80% {
        transform: translate(-1px, -1px) rotate(1deg);
    }

    90% {
        transform: translate(1px, 2px) rotate(0deg);
    }

    100% {
        transform: translate(1px, -2px) rotate(-1deg);
    }
}

.movingPointer {
    background-color: #ffcef1;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    pointer-events: none;
    position: absolute;
    width: 420px;
    height: 420px;
    filter: blur(32px);
    opacity: 0;
    border-radius: 9999px;
    z-index: 40;
}

.top-container {
    min-height: 100vh;
    background-color: #1d001600;
    position: relative;
    overflow: hidden;
}

.main-content {
    min-height: 100vh;
    position: absolute;
    background-attachment: fixed;
    z-index: 30;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
}
</style>
<script setup lang="ts">
const coordinates = ref<{ x: number; y: number }>({ x: 84, y: 155 });
function onLeave() {
//    movingthing.value.style.opacity = "0";
//    isTouched.value = false;
//    setTimeout(() => {
//        coordinates.value.x = 1000
//        coordinates.value.y = -999
//    }, 500)
}

function move(e: { pageX: number; pageY: number }) {
    if (!isTouched.value) {
        movingthing.value.style.opacity = "0"; return;
    }
    let textRect = topcontainer.value.getBoundingClientRect();

    const pointerLeft = textRect.left + textRect.width / 2;
    const pointerTop = textRect.top + textRect.height / 2;
    const distance = calculateDistance(pointerLeft, pointerTop, e.pageX, e.pageY
    );
    const size = Math.max((1000 - distance) / 200, 2);

    //        movingthing.value.style.width = movingthing.value.style.height = `${Math.max(Math.round(size * 100), 300)}px`
    movingthing.value.style.filter = `blur(${Math.min(Math.max(size * 50, 100), 160
    )}px)`;
    movingthing.value.style.opacity = `${Math.min(Math.max(size / 4, 0.8), 1
    )}`;
    coordinates.value.x = e.pageX - 100;
    coordinates.value.y = e.pageY;

    let logoGradient = `radial-gradient(circle at ${e.pageX - textRect.left}px ${e.pageY - textRect.top}px, black 20%, transparent 100%)`;
    //@ts-ignore Just ignore
    midtext.value.style["-webkit-mask-image"] = logoGradient;
    //@ts-ignore Just ignore
    midtext.value.style["mask-image"] = logoGradient;
    midtext.value.style.opacity = `${Math.min(Math.max(size / 4, 0.7), 1)}`;

    textRect = midlogo.value.getBoundingClientRect();
    logoGradient = `radial-gradient(circle at ${e.pageX - textRect.left}px ${e.pageY - textRect.top}px, black 20%, transparent 100%)`;

    //@ts-ignore Just ignore
    midlogo.value.style["-webkit-mask-image"] = logoGradient;
    //@ts-ignore Just ignore
    midlogo.value.style["mask-image"] = logoGradient;
    midlogo.value.style.opacity = `${Math.min(Math.max(size / 4, 0.7), 1)}`;

}
function movedaro(e: MouseEvent) {
    move(e);
}
function calculateDistance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(~~((x2 - x1) ** 2) - ~~((y2 - y1) ** 2)) || 0;
}
function touchdaro(e: TouchEvent) {
    move({
        pageX: e.targetTouches[0].pageX - 100, pageY: e.targetTouches[0].pageY,
    });
}
const isTouched = ref(false);
//@ts-ignore Just ignore
const movingthing = ref<HTMLDivElement>(null);
//@ts-ignore Just ignore
const midtext = ref<HTMLDivElement>(null);
//@ts-ignore Just ignore
const midlogo = ref<HTMLDivElement>(null);
//@ts-ignore Just ignore
const midcountdown = ref<HTMLDivElement>(null);
//@ts-ignore Just ignore

const topcontainer = ref<HTMLDivElement>(null);
</script>
