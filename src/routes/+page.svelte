<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';
	import Particle from "$lib/components/Particle.svelte";
	import IframeComponent from "./IframeComponent.svelte";
    import SplashScreen from '$lib/components/SplashScreen.svelte';
    import { onMount } from "svelte";

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};

    let reactAppUrl = "https://shiny-bunny-699b7f.netlify.app/";
//     let showSplash: boolean | null = null; 
// onMount(() => {
//     if (typeof window !== "undefined") {
//         if (localStorage.getItem("hasVisited")) {
//             showSplash = false; // User has visited, go straight to home page
//         } else {
//             localStorage.setItem("hasVisited", "true");
//             showSplash = true;
//             setTimeout(() => {
//                 showSplash = false;
//             }, 1000);
//         }
//     }
// });
// onMount(() => {
//         const div = document.getElementById('svelte-div');

//         if (div) {
//             requestAnimationFrame(() => {
//                 setTimeout(() => {
//                     div.style.visibility = 'visible';
//                 }, 0); // Waits until next render cycle
//             });
//         }
//     });

    // Hide splash screen after 1 second
 

</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
    <meta name="description" content="Govardhan OB - A passionate Full Stack Developer specializing in modern web development. Explore my projects, skills, and experience.">
    
    <!-- Primary Keywords -->
    <meta name="keywords" content="Govardhan, Govardhan OB, Govardhan Developer, Govardhan Full Stack Developer, Web Developer, Software Engineer">

    <!-- Open Graph for Social Sharing -->
    <meta property="og:title" content="Govardhan OB | Full Stack Developer">
    <meta property="og:description" content="Explore my portfolio to see my latest projects, skills, and web development expertise.">
    <meta property="og:url" content="https://govardhanob.github.io/">
    <meta property="og:type" content="website">

    <!-- Twitter Card for Twitter SEO -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Govardhan OB | Full Stack Developer">
    <meta name="twitter:description" content="Discover my projects and web development expertise.">
    <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Govardhan OB",
          "jobTitle": "Full Stack Developer",
          "url": "https://govardhanob.github.io/",
          "sameAs": [
            " 'https://github.com/govardhanob'",
            "https://www.linkedin.com/in/govardhan-ob/",
            
          ]
        }
        </script>
</svelte:head>



    <!-- Main content here -->
    <div class="main-container">
        <Particle />
        <div class="left-section">
            <MainTitle>{name} {lastName}</MainTitle>
            <p class="description">{description}</p>
            <div class="links">
                {#each links as link}
                    <a class="link-item"
                        href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
                        target="_blank" rel="noreferrer">
                        <Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
                    </a>
                {/each}
            </div>
        </div>
        <div class="right-section">
            <Carrousel items={skills ?? skillsItems} />
        </div>
    </div>
    <IframeComponent {reactAppUrl} />
