import React,{ Component } from 'react'; //引入react的Component
import { connect } from 'react-redux' //使用react-redux的connect連接器
import "./app.css"
class App extends Component{
   
   state = {   
      numArray:[],//建立一個空的Array接收
     
  }
     
   handleClick=(e)=>{
      
      const {dispatch} = this.props; //從props中取得dispatch派發
      const num = e.target.name;   
      const Arry = this.state.numArray;
      Arry.push(num);
      
    
      const { numArray } = this.state;

      
      //保存到Redux的store裡
      dispatch({type:'GETNUM', numArray});

      this.setState({
         numArray,    
      })
   


   }

    calculate=()=>{
      const {dispatch} = this.props;
     
      const StrNum=this.state. numArray;
      const strArry = StrNum.join('');
      const NewArry = eval(strArry).toString();
      this.state.numArray = [NewArry];
      console.log(NewArry);
      const { numArray} = this.state; //從state中解構賦值出todoName
      dispatch({type:'PRESS_CALCULATE', numArray});

      this.setState({
         numArray,    
     })
     
     
    }

    clear=()=>{
      const {dispatch} = this.props;
      
      this.state.numArray=[]; 
        
       dispatch({type:'CLEAR'});
        
       this.setState({
         numArray:[],    
      })
    }

    backspace=()=>{

      const {dispatch} = this.props;
      const Arry = this.state.numArray;
      Arry.pop();
      
      const {numArray} = this.state;
      dispatch({type:'BACKSPACE',numArray});
            
      this.setState({
         numArray,    
      })
    }
    

   render(){
    const { numArray } = this.state;
    
    return(
      <div className="calc-app">
        
         <div className="text">
            <h2 value={numArray} onChange={(e)=>this.setState({numArray:e.target.name})}>{numArray}</h2>

         </div>

         <div className="keypad">
            <button id="clear" onClick={this.clear}>
               Clear
            </button>
            <button id="backspace" onClick={this.backspace}>
               &larr;
            </button>
             
            <button name="1" onClick={this.handleClick}>
               1
            </button>
            <button name="2" onClick={this.handleClick}>
               2
            </button>
            <button name="3" onClick={this.handleClick}>
               3
            </button>
             <button name="4" onClick={this.handleClick}>
               4
            </button>
            <button name="5" onClick={this.handleClick}>
               5
            </button>
            <button name="6" onClick={this.handleClick}>
               6
            </button>        
            <button name="0" onClick={this.handleClick}>
               0
            </button>
            <button name="7" onClick={this.handleClick}>
               7
            </button>
            <button name="8" onClick={this.handleClick}>
               8
            </button>
            <button name="9" onClick={this.handleClick}>
               9
            </button>        
           
           

            <button name="+" onClick={this.handleClick}>
               +
            </button>
            <button name="-" onClick={this.handleClick}>
               -
            </button>
            <button name="*" onClick={this.handleClick}>
               &times;
            </button>
            <button name="/" onClick={this.handleClick}>
               /
            </button>
            <button name="." onClick={this.handleClick}>
               &bull;
            </button>
            <button id="result" onClick={this.calculate}>
               =
            </button>
         </div>
    </div>
       )
   } 
}



export default connect((state)=>{ //外層接收state,
   console.log("app->connect->state",state);
   return {
       todos:state.todos, //取出reducers/index.js中的todo與filter
       
   }
},(dispatch)=>{
   console.log("app->connect->props",dispatch);
   return{
       dispatch:dispatch,
   }
})(App);