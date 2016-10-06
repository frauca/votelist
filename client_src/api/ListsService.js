class ListsService{
  /**
  * add the elemento on the server
  * on succes, success will be call with the json body passed as arg to the succes function
  * on error the error will be call with the error
  */
  addList(listName,succes,error){
    let body={
      method: 'POST',
      body: `{"name":"${listName}","description":"${listName}"}`,
      headers:{"Content-Type": "application/json"}
    };
    console.log(body)
    let req= new Request('/lists',body);
    fetch(req)
    .then(response=>{succes(response.json())})
    .catch(error=>{error(error)})
  }
}

export default new ListsService();
