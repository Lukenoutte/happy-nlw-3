
import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

export default class Orphanages{
    id: number;

    name:string;

    latitude:number;

    longitude:number;

    about:string;

    instructions:string;

    opening_hours:string;

    open_on_weekends:boolean;
}
