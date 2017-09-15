function tennisgame (){

  this.reset = () =>{
    return  "LOVE-LOVE";
  }
this.eco = () =>{
  return this.reset();
}

}

test("LOVE-LOVE",()=>{
  let app = new tennisgame
  app.reset()
  let res = app.eco()
  expect(res).toBe("LOVE-LOVE")
})
