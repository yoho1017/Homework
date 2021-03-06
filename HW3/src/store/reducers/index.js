
const initState = { //初始值
    todos:[], //建立空陣列
    
}

 function calcultor(state = initState,action){
    switch (action.type){ 
                     
        case 'GETNUM':
            {   
                // const todos = [ 
                //     //...state.todos 先展開todos,添加新的內容
                //     ...state.todos,{                         
                //         curr:action.curr,                           
                //     }];
                
                const todos = action.numArray;
                const stateNew = Object.assign({},state,{
                    todos:todos,
                    //建立一個新state
                    //Object.assign()合併目標物件及(多個)來源物件所得到的最終物件。
                    //Object.assign({},原始資料state,要存/改入的物件) ,創建新物件
                });
                return  stateNew;
            }


        case 'PRESS_CALCULATE':
            {  
                // const todos = [ 
                // //...state.todos 先展開todos,添加新的內容
                // ...state.todos,{                         
                //     curr:action.todoName,                           
                // }];

                const todos = Array(action.numArray) 
               const stateNew = Object.assign({},state,{
                todos:todos,
               
               
            });
                return stateNew; 
            }

           
        case 'CLEAR':
            {   
                
                const stateNew = Object.assign({},state,{
                    todos:[],
                   
                });
                return  stateNew;
        }

        case 'BACKSPACE':
            {   
                
                const todos = action.numArray;
                const stateNew = Object.assign({},state,{
                 todos:todos,
                    
                });
                return  stateNew;
            }
        
        default: 
        return state;    
    }
}

export default calcultor;


