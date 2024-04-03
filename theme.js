let linktag = document.createElement("link");
linktag.rel = "stylesheet";
linktag.href = localStorage.getItem("theme") === "dark" ? "github.min.css" 
                                                        : "3024.min.css";
document.head.appendChild(linktag);

tailwind.config = { darkMode: "class" };

if (localStorage.theme === "dark" || 
    !("theme" in localStorage)    && 
    window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList.add("dark");
else 
    document.documentElement.classList.remove("dark");

const toggle = () => {
    localStorage.theme === "light" ? localStorage.theme = "dark" 
                                   : localStorage.theme = "light";
    window.location.reload();
}
