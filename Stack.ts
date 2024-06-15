/** How to do a Stack */
/*class Stack {
    private data: any[] | null;

    constructor() {
        this.data = null;
    }

    // push method
    push(item: any): void {
        if (!this.data) {
            this.data = [item];
        } else {
            this.data.push(item);
        }
    }

    // pop method
    pop(): any {
        if (this.data && this.data.length > 0) {
            return this.data.pop();
        } else {
            throw new Error("Cannot pop an empty stack");
        }
    }

    // peek method
    peek(): any {
        if (this.data && this.data.length > 0) {
            return this.data[this.data.length - 1];
        }
    }

    // size method
    size(): number {
        if (!this.data) {
            throw new Error("Can't check the size of an empty stack");
        }
        return this.data.length;
    }

    // popAll method
    popAll(): void {
        while (this.data && this.data.length > 0) {
            console.log(this.pop());
        }
        this.data = null;
    }
}

function reverseStack(s: Stack): Stack {
    let r = new Stack();
    while (s.size() > 0) {
        r.push(s.pop());
    }
    return r;
}

// Ejercicio con la pila
let stack = new Stack();
console.log("Pushing 55 onto the stack.");
stack.push(55);
console.log("Peek: ", stack.peek());
console.log("Pushing 56 onto the stack.");
stack.push(56);
console.log("Pushing 57 onto the stack.");
stack.push(57);
console.log("Size: ", stack.size());
console.log("Popping from the stack.");
stack.pop();
console.log("Size after pop: ", stack.size());
console.log("Pushing 60, 61, 62 onto the stack.");
stack.push(60);
stack.push(61);
stack.push(62);

console.log("Reversing the stack.");
let newStack = reverseStack(stack);
console.log("Popping all elements from the reversed stack:");
newStack.popAll();
*/



/** Exercise : PlayList*/

class Stack {
    private data: string[] | null;

    constructor() {
        this.data = null;
    }

    // push method to add a song
    push(song: string): void {
        if (!this.data) {
            this.data = [song];
        } else {
            this.data.push(song);
        }
    }

    // pop method to remove the last song
    pop(): string {
        if (this.data && this.data.length > 0) {
            return this.data.pop()!;
        } else {
            throw new Error("Cannot pop from an empty playlist");
        }
    }

    // peek method to see the last song
    peek(): string | undefined {
        if (this.data && this.data.length > 0) {
            return this.data[this.data.length - 1];
        }
    }

    // size method to get the number of songs
    size(): number {
        if (!this.data) {
            return 0;
        }
        return this.data.length;
    }

    // popAll method to clear the playlist
    popAll(): void {
        while (this.data && this.data.length > 0) {
            console.log(this.pop());
        }
        this.data = null;
    }

    // method to list all songs
    listAll(): void {
        if (this.data && this.data.length > 0) {
            console.log("Playlist:");
            this.data.forEach((song, index) => {
                console.log(`${index + 1}. ${song}`);
            });
        } else {
            console.log("The playlist is empty.");
        }
    }

    addFirst(song: string): void {
        if (!this.data) {
            this.data = [song];
        } else {
            this.data.unshift(song);
        }
    }

    // method to remove a song at a specific position
    removeAt(index: number): void {
        if (this.data && index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
        } else {
            throw new Error("Index out of bounds");
        }
    }

}

// Initialize playlist with 4 songs
let playlist = new Stack();
playlist.push("Song 1 - Artist A");
playlist.push("Song 2 - Artist B");
playlist.push("Song 3 - Artist C");
playlist.push("Song 4 - Artist D");

// Add 3 more songs
playlist.push("Song 5 - Artist E");
playlist.push("Song 6 - Artist F");
playlist.push("Song 7 - Artist G");

// Add a song at the beginning
playlist.addFirst("Song 0 - Artist Z");


// Remove 2 songs
playlist.pop();
playlist.pop();


// Remove a song at a specific position 
playlist.removeAt(2); //Delete Song 2

// List all songs
playlist.listAll();
