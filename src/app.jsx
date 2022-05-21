import React from "react";
import "./app.css"
import { AiFillCaretUp,AiFillCaretDown } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
// import Audio from "./asset/rings/sound.mp3"
export default class App extends React.Component{
    state={
        input:{
          name:"",
          time:""
        },
        arr:[],
        index:null,
        cls_Sub:"Show",
        cls_Upd:"Hide"
    }
    timer=()=>{
      var arr=this.state.arr
      arr.map((ele,i)=>{
        console.log(ele.name,ele.time);
        var time = new Date().toLocaleTimeString()
        const  [hours , minutes , sec] = time.split(":")
        console.log(hours , minutes , sec);
        var second = ele.time
        const [hr,min] = second.split(":")
        console.log(hr,min);
        if(hr == hours && min == minutes)
        {
          // <audio ref="audio_tag" src={Audio} controls autoPlay/>
          alert("and here it is guys boom                                         ")
        }
        
      })
    }
    componentDidMount(){
     setInterval(this.timer,1000
      //  setTimeout(this.timer,1000)
     )
     setTimeout(this.timer,3000)
    }

    handlechnge=(e)=>{

      this.setState({input:{...this.state.input,[e.target.name]:e.target.value}})
    }
    handleClick=()=>{
      console.log(this.timer.time);
      if(this.state.input.name == "")
      {
        alert("input is empty")
      }
      else
      if(this.state.input.time == "")
      {
        alert("input is empty")
      }
      else
      {
        var data=this.state.arr
        data.push(this.state.input)
        this.setState({arr:data , input:{name:"" , time:""}})
      }
    }
    shiftUp=(i)=>{
        // console.log(i)
        if(i  == 0){alert("u r already up")}
        else{
        var new_arr=this.state.arr
        var temp = new_arr[i]
        new_arr[i] = new_arr[i-1]
        new_arr[i-1]=temp
        this.setState({arr:new_arr})
        }
    }
    shiftDown=(i)=>{
      // console.log(i)
      if(i  == this.state.arr.length-1){alert("you are on the last line")}
      else{
      var new_arr=this.state.arr
      var temp = new_arr[i]
      new_arr[i] = new_arr[i+1]
      new_arr[i+1]=temp
      this.setState({arr:new_arr})
      }
  }
  Del=(i)=>{
    var new_arr = this.state.arr
    new_arr.splice(i,1)
    this.setState({arr:new_arr})
  }
  Edit=(i)=>{
  this.setState({cls_Sub:"Hide",cls_Upd:"Show",index:i,input:this.state.arr[i]})
  }
  Update=()=>{
    var newarr=this.state.arr
    newarr[this.state.index] = this.state.input
    this.setState({cls_Sub:"Show",cls_Upd:"Hide",arr:newarr,input:""})
  }
    render(){
        const respose = this.state.arr.map((lis,i)=>{
            return(
            <tbody>
            <tr>
              <th className="text-center" scope="row">{i}</th>
              <td className="text-center">{lis.name}</td>
              <td className="text-center">{lis.time}</td>
              <td className="text-center">
                <div className="btn-group">
                  <button className=" mx-1 btn btn-primary" onClick={()=>{this.shiftUp(i)}}><AiFillCaretUp/></button>
                  <button className=" mx-1 btn btn-secondary" onClick={()=>{this.shiftDown(i)}}><AiFillCaretDown/></button>
                  <button className=" mx-1 btn btn-danger" onClick={()=>{this.Del(i)}}><RiDeleteBin6Fill/></button>
                  <button className=" mx-1 btn btn-success" onClick={()=>{this.Edit(i)}}><BiEdit/></button>
                  </div>
              </td>
            </tr>
        
          </tbody>
            )
        })
        console.log(this.state);
        return(<>
        <div className="container  py-4  d-flex justify-content-center flex-column align-items-center">
            <h1 className=" head py-2">Todo List</h1>
<div class="input-group d-flex justify-content-center py-3">
  <input type="text"  name="name" value={this.state.input.name}  class="form-control " maxLength="30"  onChange={this.handlechnge} className="w-50 py-2 px-3" placeholder=" Enter the value"/>
  <input type="time" name="time" value={this.state.input.time} onChange={this.handlechnge}/>
  <button class="btn btn-outline-secondary" type="button" className={this.state.cls_Sub} id="bbn"  onClick={this.handleClick}>Submit</button>
  <button class="btn btn-outline-secondary" type="button" className={this.state.cls_Upd} id="bbn" onClick={this.Update} >Update</button>
</div>
</div>
<div className="container w-75 new ">
<table class="table table-dark table-hover">
  <thead>
    <tr>
      <th scope="col" className="text-center w-25">#</th>
      <th scope="col" className="text-center w-25">Data</th>
      <th scope="col" className="text-center w-25">Time</th>
      <th scope="col" className="text-center w-25">Handle</th>
    </tr>
  </thead>
  {respose}

</table>
</div>
</>
)
            
        
    }
}