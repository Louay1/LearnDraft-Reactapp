import React, {Component} from 'react';

class Atoms extends Component{
    render(){
        //console.log(this.props);
        const {atoms} = this.props;
        const atomList = atoms.map(atom => {
            return(
                <div className="atom" key={atom.id}>
                    <div>Name: {atom.name}</div>
                    <div>Symbol: {atom.symbol}</div>
                    <div>Atomic Number: {atom.atm}</div>
                </div>
            )
        })
        return(
            <div className="atom-list">
                {atomList}
            </div>
        )
    }
}

export default Atoms