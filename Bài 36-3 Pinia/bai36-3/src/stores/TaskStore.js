import { defineStore } from "pinia";
export const useTaskStore = defineStore('taskStore',{
    state: () => ({
        tasks:[
            {id:1, title: "Choi game", isFav:false},
            {id:2, title: "Xem phim", isFav:false}
        ],
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount() {
            return this.tasks.reduce((res, currentVal) => {
                if(currentVal.isFav) {
                    return res + 1;
                }
                else {
                    return res;
                }
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length;
        }
    },
    actions: {
        addTask(task) {
            this.tasks.push(task);
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id;
            })
        },
        toggleFav(id) {
            const task = this.tasks.find(t => t.id === id);
            task.isFav = !task.isFav;
        }
    }
})