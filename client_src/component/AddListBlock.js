import React from 'react'


class AddListBlock extends React.Component {
  constructor(props) {
    super(props);
    this.listName="";
  }

  render () {
    return <div>
      <input ref={input=>{this.listName=input}}/>
      <button onClick={()=>{
          this.props.addList(this.listName.value);
        }}>Add Todo</button>
    </div>;
  }
}

export default AddListBlock;
