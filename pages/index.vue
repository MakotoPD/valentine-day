<template>
    <div class="h-screen w-screen flex items-center justify-center">
        <div class="flex flex-col justify-center items-center gap-6">
            <img src="/czyzostaniesz.gif" class="h-64 object-contain" alt="gif">
            <p class="text-3xl text-red-400">Czy zostaniesz moją walentynką?</p>
            <div class="flex items-center justify-center gap-3">
                <button 
                    :style="'font-size:'+size+'rem'"
                    id="yes"
                    class="bg-green-500 text-white py-1 px-4 h-fit rounded-lg"
                    @click="navigateTo({ path: '/tak' })"
                    >
                    TAK
                </button>
                <button 
                    id="no"
                    class="bg-red-500 text-white text-4xl py-2.5 px-6 h-fit rounded-lg"
                    @click="clickno"
                    >
                    NIE
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
let size = ref(2.25)

let lista = [
    'Jesteś pewna?',
    'Na pewno?',
    'Coś nie teges?',
    'Proszeee',
    'Ślicznie proszę',
    'Przemyśl to proszę :c',
    'Jeśli powiesz "nie" to bedzio mi smutno',
    'Jeśli powiesz "nie" to bedzio bardzo mi smutno',
    'okej.. już nie pytam',
    'Żartuje. PROSZE KLIKNIJ TAK TAK TAK',
    'Łamiesz mi serduszko :c',
    'Ale ty tak na serio??',
    'No prosze cie no skarbie..'
]

let i = ref(0)
let clickno = () => {
    
    const yes = document.getElementById("yes") as HTMLButtonElement;
    const no = document.getElementById('no') as HTMLButtonElement;

    size.value = size.value*1.3
    yes.style.fontSize = size.toString()


    no.innerText = lista[i.value]

    if (i.value == lista.length-1) {
        i.value = 0
    } else{
        i.value = i.value + 1
    }
   

    console.log('s')
}
</script>