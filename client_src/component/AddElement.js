import React from 'react'


class AddElement extends React.Component {
  constructor(props) {
    super(props);
    this.name="";
    this.description="";
  }

  render () {
    return  <div className="message_wrapper">
        <div className="col-md-10">
          <h4 className="heading"><input ref={input=>{this.name=input}}/></h4>
          <blockquote className="message"><input ref={input=>{this.description=input}}/></blockquote>
        </div>
        <div className="col-md-2">
          <button type="button" className="btn btn-default btn-sm"
              onClick={()=>{
                  this.props.addElement(this.name.value,this.description.value);
                  this.name.value=this.description.value="";
                }}>
            <span className="glyphicon glyphicon-plus"></span> Add Todo
          </button>
       </div>
      </div>;
  }
}

export default AddElement;
