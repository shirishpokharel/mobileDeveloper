export default data = (state ={name:"Ram"}, action) =>{
    switch (action.type) {
      case "childA":
        return state;
      case "childC":
        return state;
      default:
        return state;
    }
}