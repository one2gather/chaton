// render chat templates to the DOM
// clear the list of chats (when teh room changes)

export default class ChatUI {

    constructor(list) {
        this.list = list;
    }

    clear() {
        this.list.innerHTML = '';
    }

    render(data) {
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix: true }    
        );

        const html = `
            <li class="list-group-item">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${when}</div>
            </li>
        `;
        this.list.innerHTML += html;
    }
}