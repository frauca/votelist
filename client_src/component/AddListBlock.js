import React from 'react'


class AddListBlock extends React.Component {
  constructor(props) {
    super(props);
    this.listName="";
    this.listDescription="";
  }

  render () {
    return  <div className="message_wrapper">
        <div className="col-md-10">
          <h4 className="heading"><input ref={input=>{this.listName=input}}/></h4>
          <blockquote className="message"><input ref={input=>{this.listDescription=input}}/></blockquote>
        </div>
        <div className="col-md-2">
          <button type="button" className="btn btn-default btn-sm"
              onClick={()=>{
                  this.props.addList(this.listName.value,this.listDescription.value);
                  this.listName.value=this.listDescription.value="";
                }}>
            <span className="glyphicon glyphicon-plus"></span> Add Todo
          </button>
       </div>
      </div>;
  }
}

export default AddListBlock;
