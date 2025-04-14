const btn = document.querySelector('.btn');
// başlangıç teması  olarak "light" seçildi
let theme = "light";

// butona tıklama olayını yazıyoruz
btn.addEventListener('click', () =>{
    if(theme === "light"){
        // böyle cssde olan dark-theme tanımlamaları aktif hale geliyor
        document.documentElement.classList.add("dark-theme");
        theme = "dark";
        btn.textContent = "Açık"
    }
    else if(theme === "dark"){
        document.documentElement.classList.remove("dark-theme");
        theme = "light";
        btn.textContent = "Koyu";
    }
})