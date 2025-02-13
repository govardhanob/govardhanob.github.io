<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    const greetings = ["Hi","ഹായ്", "Hola", "Bonjour", "Hallo", "Ciao", "こんにちは", "नमस्ते", "你好", "Привет", "안녕하세요"];

    let index = writable(0);
    let showSplash = writable(true);

    onMount(() => {
        const textInterval = setInterval(() => {
            index.update(n => n + 1);
        }, 100);

        // Stop interval & hide splash exactly at 1000ms
        setTimeout(() => {
            clearInterval(1000);
            
            showSplash.update(() => false);
				
        }, 1000);
    });
</script>

{#if $showSplash}


    <div class="splash-screen">
        <span class="greeting">{greetings[$index] ?? greetings[greetings.length - 1]}</span>
    </div>
{/if}

<style lang="scss">
    .splash-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--main);
        color: var(--main-text);
        font-size: 3rem;
        font-weight: bold;
        z-index: 999;
    }

    .greeting {
        animation: fade 0.1s ease-in-out;
    }

    @keyframes fade {
        0% { opacity: 0; transform: scale(0.9); }
        100% { opacity: 1; transform: scale(1); }
    }
</style>
