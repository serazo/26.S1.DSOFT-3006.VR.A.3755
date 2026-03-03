import { defineStore } from "pinia";
import { ref } from "vue";
export const useContentStore = defineStore('content', () => {
    const menu = ref(localStorage.getItem('menu') ? JSON.parse(localStorage.getItem('menu') as string) : null);
    const content = ref({
        id: null,
        nombre: null,
        descripcion: null,
        url: null,
        tipo: null,
    }); 
    function setContent(data: any | null){
        content.value = data || {
            id: null,
            nombre: null,   

            descripcion: null,
            url: null,
            tipo: null,
        };
    }   
    function $setMenu(data: any | null){
        menu.value = data || [];
        if(menu.value){
            localStorage.setItem('menu', JSON.stringify(menu.value));
        } else {
            localStorage.removeItem('menu');
        }   
    }   

    return { content, setContent, menu, $setMenu };
});