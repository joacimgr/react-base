import React from 'react';

class ListItem extends React.Component {

    render() {
        return (
        <div>
          
          <p>{this.props.item}</p>
        </div>
        )
    }
}
export default ListItem;