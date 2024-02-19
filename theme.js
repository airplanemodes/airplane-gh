const cssfile = localStorage.getItem('theme') === 'dark' ? '3024.min.css' : 'github.min.css';
let linkelement = document.createElement('link');
linkelement.rel = 'stylesheet';
linkelement.href = cssfile;
document.head.appendChild(linkelement);

tailwind.config = { darkMode: 'class' }
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
    document.documentElement.classList.add('dark');
else 
    document.documentElement.classList.remove('dark');

const toggle = () => {
    localStorage.theme === 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light';
    window.location.reload();
}