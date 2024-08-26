import {atom, selector} from "recoil";
import { Task } from "../types/Task";

export const addTitleState=atom<Array<Task>>({
    key:"addTitleState",
    default:[],
});

export const addTitleStatelength=selector<number>({
    key:"addTitleStateLength",
    get:({get})=>{
        const addTitleNumber:Array<Task>=get(addTitleState);
        return addTitleNumber?.length||0;

    },
});