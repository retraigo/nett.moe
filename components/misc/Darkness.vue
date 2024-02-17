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
                @touchstart="() => (isTouched = true)" @touchend="onLeave" @click="playAudio">
                <div :class="`movingPointer transition-opacity duration-500`" ref="movingthing"
                    :style="{ left: coordinates.x - 60 + 'px', top: coordinates.y - 260 + 'px', }" />
            </div>
            <div class="relative z-20 overflow-visible">
                <div ref="midtext"
                    class="midtext overflow-visible text-5xl lg:text-6xl lg:mt-16 xl:text-8xl transition-opacity duration-500 ease-in-out mt-12">
                    <span class="font-arial tracking-wider">{{ touches >= 999 ? LALA : `Pranev (NeTT)` }}</span>
                </div>
                <div ref="midlogo"
                    :style="{ maskImage: `radial-gradient(circle at ${coordinates.x}px ${coordinates.y}px, black 40%, transparent 100%)` }"
                    class="midtext transition-opacity duration-500 ease-in-out mt-8">
                    <div class="flex flex-col items-center mx-auto">
                        <img src="/nettdoru.webp" ref="doNotTheImage"
                            class="w-60 md:w-96 p-5 transition duration-500 ease-in-out transform hover:scale-110" />
                    </div>
                    <p class="p-2">
                        {{ touches >= 999 ? new Array(Math.ceil(Math.random() *
                            5)).fill(LALADESC).join(
                                "",
                            ) : `I'm Pranev, aka NeTT, a college student who makes random JavaScript programs in my free time. I
                        usually
                        make websites and web apps using Vue and Nuxt.`}}
                    </p>
                </div>
            </div>
            <audio ref="eerieMusic" loop class="invisible">
                <source src="/music/wasitthen.wav" type="audio/wav" />
            </audio>
            <footer class="stroke-[#ffcef1] relative z-40 flex flex-row items-center justify-center stroke-1 gap-4 mx-auto">
                <a href="https://github.com/retraigo" target="_blank" class="font-semibold flex flex-row items-center">
                    <span class="sr-only">NeTT's GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        class="feather feather-github">
                        <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                        </path>
                    </svg> </a>
                <a href="https://twitter.com/retraigo" target="_blank" class="font-semibold flex flex-row items-center">
                    <span class="sr-only">NeTT's Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
                        <path
                            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                        </path>
                    </svg>
                </a>
                <a href="https://linkedin.com/in/pranevss" target="_blank" class="font-semibold flex flex-row items-center">
                    <span class="sr-only">NeTT's LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                        </path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>
            </footer>
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

    40% {
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

const LALA = `Ļ̸̛̭̜̯̫̬̱͈̲̬̱̥͚̰͉̺̖̥̯̤̮̺͈͖͈̲͕͔̱̟̩̪͈͓̙̦͈͎̙͓͈̩̆͌͒̑̌̅̇̍͑̃͌̑͂͑̀ͅä̴̧̨̬̤̱̘͍̟͈̼̪̥͇͎͉̮̙̬͈̳̦̩̥̹̼̼͇̝̮̞̳̬̪̽̈́͒̈́̄̆̑̋͑̑͐̇͂̿͆́̈͛̂͘͘͘̕̚̕̚͝͠ ̶̧̡͎͎͈̤̦̘͖̺̙̺̺̤̤̮͕̪͚̫͌͆͊͌̋̀́̽͛̏̾̓̿̂͗̈́̐̃̋̐̔͗̐̽̔̑̕Ļ̴̢̧̧̤͚̠̻͖̪͇̦̲̠̺̣̹̟͔̯̱̹̖͍̗̼͚̫̙̘̱̲͇̞̥̗̬̳͍͍̲̠̤̲͇̮̉̃̅́̊̀̉̃̃̃͑̏͗̄̄̽̿͊̇̈́̈́̎̈̓̔́̂͐̔̎̾̽̾̚̕̕͘͜͝͠͝͝ͅạ̴̢̡̢̢̼̹̝͓̰̥̖̞͚̱̘̰̯̖̲̲͚͓͖̘̹̹̱̘̩̦̬͕̙̯͙̟͎̱̲͈͕̼̗̙̥͕̬̗̮͔͓̦̪̐̊̐̈́́̉̇̎͂̈̔̈̓̀̎̿̋̉͊̎͗̀͌͂̂̀͊̏̍̏̕͘̕̕͝͝͝͝ͅļ̷͚̰͖͔͇͖̹͖̲̦̝̭̦̰̱͗̓̿̐̂̆̈́͑̈̓̓͑̏̒͐̽̄̎̓̅̇̇̐͊̊̿͂̅́̑́̑͛͊̒͋̈̉̂̉̐̈́̉̎͛̉͒͘͘͘̕͝͠͝a̶̧̧̨̧̧̛̛̰̮̯̳̩̞͕̳͓̹̠̗̙̫̣͚̦̻͙̤̙͈̺̞̻̦̱̪͔̘̭͇͓͍̰̲̗̻̭̗̓̈́̏̄̉̈͒̀̓̽̈́̏̃́̃̓͊͒̑͒̿͆̎̅͛̈͆̓̂͊̅̃̔̑̍̈́͛͑̒̅̀̀͋̚͘͘͘͜͜͠͝͠͝ͅͅ`;

const LALADESC = `776879776f756c64796f75`;

// @ts-ignore pls
const doNotTheImage = ref<HTMLImageElement>(null)
// @ts-ignore pls
const eerieMusic = ref<HTMLAudioElement>(null)
const touches = ref(0)
function onLeave() {
    movingthing.value.style.opacity = "0";
    isTouched.value = false;
    setTimeout(() => {
        coordinates.value.x = 1000
        coordinates.value.y = -999
        if (Math.random() > 0.6) {
            if (touches.value === 8) {
                touches.value = 999;
                //@ts-ignore pls
                midtext.value.style["-webkit-mask-image"] = ""
                //@ts-ignore pls
                midtext.value.style["mask-image"] = ""
            }
            else if (touches.value < 8) touches.value += 1
            doNotTheImage.value.src = `/variants/${Math.min(touches.value, 999)}.webp`

        }
    }, 500)
}

function playAudio() {
    if(touches.value >= 999) {
        eerieMusic.value.play()
    }
}

function move(e: { pageX: number; pageY: number }) {
    if (touches.value >= 999) return
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

    let logoGradient = `radial-gradient(circle at ${e.pageX - textRect.left}px ${e.pageY - textRect.top}px, black 40%, transparent 100%)`;
    //@ts-ignore Just ignore
    midtext.value.style["-webkit-mask-image"] = logoGradient;
    //@ts-ignore Just ignore
    midtext.value.style["mask-image"] = logoGradient;
    midtext.value.style.opacity = `${Math.min(Math.max(size / 4, 0.7), 1)}`;

    textRect = midlogo.value.getBoundingClientRect();
    logoGradient = `radial-gradient(circle at ${e.pageX - textRect.left}px ${e.pageY - textRect.top}px, black 40%, transparent 100%)`;

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
