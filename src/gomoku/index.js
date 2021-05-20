import React, {Component} from 'react'
import './index.css'
import chess from './logic'
import './fetch'

class Gomoku extends Component {
    constructor(props) {
        super(props)
        this.state = {
            row: 5,
            col: 5,
            lastPiece: '',
            hour: 0,
            minute: 0,
            second: 0
        }
    }

    render() {
        const currColor = !this.state.lastPiece || this.state.lastPiece === 'white' ? '黑子' : '白子'
        return (
            <div>
                <div className="broad">
                    <h1 className="topic">{currColor+'回合'}</h1>
                    <div className="time">
                        <label>{`${this.state.hour}:${this.state.minute}:${this.state.second}`}</label>
                    </div>
                    {this.getRows()}
                </div>
            </div>
        )
    }
    
    getRows() {
        return Array.from({ length: chess.Num }).map((item, index) => {
            return (
                <div className="row" key={index+'row'}>
                    {this.getCols(index)}
                </div>
            )
        })
    }

    getCols(row) {
        return Array.from({ length: chess.Num }).map((item, index) => {
            return (
                <div className='box' key={index+'col'}>
                    <div className="piece" onClick={this.setPiece.bind(this, row, index)}></div>
                </div>
            )
        })
    }

    setPiece(row, col, e) {
        const { lastPiece } = this.state
        if (!lastPiece) {
            setInterval(() => {
                this.setState(preState => ({
                    second: preState.second + 1
                }))
            }, 1000)
        }
        const playChessColor = !lastPiece || lastPiece === 'white' ? 'black' : 'white'
        this.setState({
            lastPiece: playChessColor
        })
        chess.chessUtils.playChess(row, col, playChessColor)
        e.target.classList.add(playChessColor)
        if (chess.chessUtils.isVictory(row, col) === 'victory') {
            alert(`Game over, ${playChessColor} victory！`)
            window.location.reload()
        }
        console.log(this.state.lastPiece)
    }
}

export default Gomoku