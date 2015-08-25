///<reference path="../reference.ts"/>

/**
 * Service that persists and retrieves TODOs from localStorage
 */
class TodoStorage {
    STORAGE_ID = 'todos-angularjs';

    static IID = 'TodoStorage';

    get():Todo[] {
        return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
    }

    put(todos:Todo[]) {
        localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
    }
}

ngbpTs.service(TodoStorage.IID, TodoStorage);
