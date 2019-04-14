const Num = 16

const arr = Array.from({ length: Num }).map((item, index) => Array.from({ length: Num }).map(() => ''))

class Utils {
    constructor() {
        this.direction = {
            top: [-1, 0],
            bottom: [1, 0],
            left: [0, -1],
            right: [0, 1],
            topLeft: [-1, -1],
            topRight: [-1, 1],
            bottomLeft: [1, -1],
            bottomRight: [1, 1],
        }
    }

    getDirectionNum(row, col, direct) {
        let count = 0
        const directions = this.direction[direct]
        const curColor = arr && arr[row] && arr[row][col]
        for (let i = 1; i < 5; i++) {
            const countRow = row + i * directions[0]
            const countCol = col + i * directions[1]
            if (countRow < 0 || countRow >= Num || countCol < 0 || countCol >= Num) {
                break
            }
            const nextColor = arr[countRow][countCol]
            if (curColor === nextColor) {
                count++
            } else {
                break
            }
        }
        return count
    }

    isVictory(row, col) {
        const verticalNum = this.getDirectionNum(row, col, 'top') + this.getDirectionNum(row, col, 'bottom')
        const horitzionNum = this.getDirectionNum(row, col, 'left') + this.getDirectionNum(row, col, 'right')
        const leftNum = this.getDirectionNum(row, col, 'topLeft') + this.getDirectionNum(row, col, 'bottomRight')
        const rightNum = this.getDirectionNum(row, col, 'topRight') + this.getDirectionNum(row, col, 'bottomLeft')
        if (verticalNum === 4 || horitzionNum === 4 || leftNum === 4 || rightNum === 4) {
            return 'victory'
        } else {
            return 'continue'
        }
    }

    playChess(row, col, color) {
        arr[row][col] = color
    }
}

export default {
    Num,
    chessUtils: new Utils()
}