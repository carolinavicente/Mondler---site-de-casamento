import Vue from 'vue'
import lshelper from '~/helpers/localstoragehelper.js'

var logged_user = null;

function mockasync (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: data}), 600)
  })
}

const api = {
    login(username, password){
        if(password){
            logged_user = {
                username: username,
                first_name: 'Mark',
                last_name: 'Zuckerberg',
                email: 'zuck@facebook.com',
                notifications_enabled: true,
                permissions:{
                    ADMIN: username == 'admin',
                    STAFF: username == 'admin',
                }
            };
        }
        return mockasync(logged_user);
    },
    logout(){
        logged_user = null;
        return mockasync({});
    },
    whoami(){
        return mockasync(logged_user ? {
            authenticated: true,
            user: logged_user,
        } : {authenticated: false});
    },
    add_todo(newtask){
        return mockasync({description: newtask, done: false});
    },
    list_todos(){
        return mockasync({
            todos: [
                {description: 'Do the laundry', done: true},
                {description: 'Walk the dog', done: false}
            ]
        });
    },
    mensagem (author_name, text) {
        var m = {
            author_name: author_name,
            text: text
        }
        lshelper.addmessage(m)
        return mockasync(m)
    },
    list_mensagens(){
        return mockasync (lshelper.getmessages())
        // return mockasync([
        //     {
        //         author_name: 'Ross Geller',
        //         text: 'My best friend and my sister!!'
        //     },
        //     {
        //         author_name: 'Phoebe Buffay',
        //         text: 'You guys are each others lobsters <3'
        //     },
        //     {
        //         author_name: 'Joey Tribbiani',
        //         text: 'Its a love based on giving, recieving, having and sharing.'
        //     },
        //     {
        //         author_name: 'Rachel Greene',
        //         text: 'I can think of no two people better prepared for this journey :)'
        //     }
        // ])
    },
    list_convidados(){
        return mockasync([
            {
                id: 0,
                guest_name: 'Rachel Greene',
                convitinhos: 1,
                confirmado: ''
            },
            {
                id: 1,
                guest_name: 'Phoebe Buffay',
                convitinhos: 2,
                confirmado: ''
            },
            {
                id: 2,
                guest_name: 'Joey Tribbiani',
                convitinhos: 1,
                confirmado: ''
            },
            {
                id: 3,
                guest_name: 'Ross Geller',
                convitinhos: 3,
                confirmado: ''
            }
        ]).then(response => response.data)
    }
};

export default api;
