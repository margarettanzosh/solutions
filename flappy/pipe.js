class Pipe {
    constructor (img) {
        this.img = img
        this.scroll = -1
        this.x = 500
        // assume virtual height is 300
        this.y = random(300 / 3 , 300 - 100)
        this.width = img.width
        this.height = img.hight
        this.gap = random(80, 100)
        this.scored = false
    }

    update() {
        this.x += this.scroll
    }

    display() {
        image(this.img, this.x, this.y, this.width * .5, this.height * .5)
        
        push()
        scale(1, -1)
        image(this.img, this.x, -this.y + this.gap, this.width * .5, this.height * .5)
        pop()
    }

}