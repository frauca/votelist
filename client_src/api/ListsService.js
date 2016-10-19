

class ListsService{
  /**
  * add the elemento on the server
  * on succes, success will be call with the json body passed as arg to the succes function
  * on error the error will be call with the error
  */
  addList(listName,listDescription,success,error){
    let body={
      method: 'POST',
      body: `{"name":"${listName}","description":"${listDescription}"}`,
      headers:{"Content-Type": "application/json"}
    };
    let req= new Request('/lists',body);
    fetch(req)
    .then(response=>{
      response.json().then(json=>{
        success(json);
      })
    })
    .catch(error=>{error(error)})
  }
  /**
  * add the elemento on the server
  * on succes, success will be call with the json body passed as arg to the succes function
  * on error the error will be call with the error
  */
  saveList(list){
    let body={
      method: 'POST',
      body: JSON.stringify(list),
      headers:{"Content-Type": "application/json"}
    };
    let req= new Request('/lists',body);
    fetch(req)
    .then(response=>{
      response.json().then(json=>{
        console.log('it has been save');
      })
    })
    .catch(error=>{console.log('error raised')})
  }
  /**
  * get the list on success call success callback with the json returned value
  * on error call error callbacl
  */
  getList(success,error){
    return fetch('/lists')
      .then(response => {
        response.json().then(json=>{
          success(json);
        });
      })
      .catch(error=>{error(error)})
  }

  createChild=(name,description)=>({
    name,
    description
  })
}

export default new ListsService();
