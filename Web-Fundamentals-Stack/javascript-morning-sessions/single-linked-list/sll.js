function SLL() {
    this.head = null;
}

function node(val) {
    this.value = val;
    this.next = null;
}

var sll = new sll();
sll.prototype.addback = function(val) {
    var node = new node(val),
    if(this.head == null) {
        this.head = node;
    } else {
        var current = this.head;
        while(current.next != null){
            current = current.next
        }
        current.next = node;
        }
    }
}


