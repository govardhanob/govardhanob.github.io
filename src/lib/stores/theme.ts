import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// Load theme from localStorage (default to dark mode)
const storedTheme = browser ? localStorage.getItem('theme') : 'dark';
export const theme = writable<string>(storedTheme || 'dark');

export const toggleTheme = () => {
    theme.update(current => {
        const newTheme = current === 'dark' ? 'light' : 'dark';
        
        if (browser) {
            localStorage.setItem('theme', newTheme);
            document.querySelector(':root')?.setAttribute('data-theme', newTheme);
        }

        return newTheme;
    });
};

export const onHydrated = () => {
    if (browser) {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        theme.set(savedTheme);
        document.querySelector(':root')?.setAttribute('data-theme', savedTheme);
    }
};
