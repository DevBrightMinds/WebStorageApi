class StorageApi {
    constructor() { };

    saveData = (key, params) => {
        const list = [];
        const existingData = this.getData(key);
        const data = (existingData == null) ? {} : JSON.parse(existingData);

        if (Array.isArray(data)) {
            list.push(...data);
        }

        list.push(params);

        localStorage.setItem(key, JSON.stringify(list));
        localStorage.setItem("currentUser", JSON.stringify(params));
    }

    getData = (key) => {
        return localStorage.getItem(key);
    }

    removeData = (key) => {
        return localStorage.removeItem(key);
    }

}