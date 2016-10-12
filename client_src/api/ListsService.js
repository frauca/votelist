class ListsService{
  /**
  * add the elemento on the server
  * on succes, success will be call with the json body passed as arg to the succes function
  * on error the error will be call with the error
  */
  addList(listName,listDescription,succes,error){
    console.log('adding'+listName+" "+listDescription);
    let body={
      method: 'POST',
      body: `{"name":"${listName}","description":"${listDescription}"}`,
      headers:{"Content-Type": "application/json"}
    };
    console.log(body)
    let req= new Request('/lists',body);
    fetch(req)
    .then(response=>{succes(response.json())})
    .catch(error=>{error(error)})
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
}

export default new ListsService();
