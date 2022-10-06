// functions

var functions = {
    init: () => {
        if (localStorage.getItem('initCheck') != undefined ) {
            console.log("ERR: A virtual fs is already initialized.")
            return
        }
        localStorage.setItem('initCheck', 1)
        localStorage.setItem('virtFsTable', empty)
    },
    createFile: (folderPath, fileName) => {
        if (localStorage.getItem('virtFsTable') = undefined ) {
            console.log("ERR: A virtual fs table has not been created yet.")
            return
        }
        if (folderPath, fileName = undefined) {
            console.log("ERR: Missing arguments.")
            return
        }
        var table = localStorage.getItem('virtFsTable')
        localStorage.setItem(folderPath + fileName, '0')
        if (table = 'empty') {
            localStorage.setItem('virtFsTable', folderPath + fileName)
        } else {
            localStorage.setItem('virtFsTable', table + "," + folderPath + fileName)
        }
    },
    getFile: (folderPath, fileName) => {
        if (localStorage.getItem('virtFsTable') = undefined ) {
            console.log("ERR: A virtual fs table has not been created yet.")
            return
        }
        return localStorage.getItem(folderPath + fileName);
    }
}

export default functions;