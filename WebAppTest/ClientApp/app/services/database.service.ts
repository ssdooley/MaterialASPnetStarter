import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserData } from '../models/user.model';

const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuschia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olviia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

@Injectable()
export class DatabaseService {
    dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
    get data(): UserData[] { return this.dataChange.value; }

    constructor() {
        for (let i = 0; i < 100; i++) { this.addUser(); }
    }

    addUser() {
        const copiedData = this.data.slice();
        copiedData.push(this.createdNewUser());
        this.dataChange.next(copiedData);
    }

    private createdNewUser() {
        const name =
            NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    }
}