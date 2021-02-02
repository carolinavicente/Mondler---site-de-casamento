const helper = {
    getmessages () {
        let s = localStorage.getItem('messages')
        if(s==null) {
            s = "[]"
        }
        var messages = JSON.parse(s) 
        return messages
    },
    addmessage (m) {
        let s = localStorage.getItem('messages')
        if(s==null) {
            s = "[]"
        }
        var messages = JSON.parse(s)
        messages.push(m)
        localStorage.setItem('messages', JSON.stringify(messages))  
    }
}
export default helper
