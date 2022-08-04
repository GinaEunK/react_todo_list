// 액션타입 정해주기
// 액션타입을 상수로 지정할때는 무조건 대문자로 해야함
const ADDTODO = "ADDTODO";
const DELETETODO = "DELETETODO";
const CHECKTODO = "CHECKTODO";

// Action creation
// creat에 대한 객체를 만들기위한 액션 생성 함수 만들기
// payload 는 받아올 새 데이터
// 액션 생성함수는 액션 개체를 리턴하기 때문에 딕셔너리
// 타입으로 어떤 타입의 액션인지 알려줘여함
// payload:payload} = {payload} JS에선 키와 value 값이 같으면 생략가능
export const addTodo = (payload) => {
  return { type: ADDTODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETETODO, payload };
};
export const checkTodo = (payload) => {
  return { type: CHECKTODO, payload };
};

// 초기 상태값 만들어주기
const initialState = {
  d_list: [
    {
      id: 1,
      title: "리액트",
      body: "공부하자",
      isDone: false,
    },
    {
      id: 2,
      title: "운동하기",
      body: "꼭",
      isDone: true,
    },
  ],
};

//리듀서 하기
// 실질적으로 store에 들어가 있는 데이터를 변경하는곳
// export default function DetailTodo ()처럼 써도됨
// export default function reduce() 도 같은거
function DetailTodo(state = initialState, action = {}) {
  switch (action.type) {
    case "ADDTODO":
      // 1
      const new_todolist = [...state.d_list, action.payload];
      //3. return 안의 배열에 들어갈 변수 new_todolist 지정
      // 원래 d_list는 state.d_list여서 스프레드문법으로 ...state.d_list해줌
      // 새로운 값 = 새로운데이터(payload)는 액션개체에 들어가 있다
      //  action 안에 있는 새 payload데이터 가져오기 => action.bucket
      console.log(new_todolist);
      return { d_list: new_todolist };
    //2. return 해주는 값이 새로운 state가 된다
    // 리턴 안에는 하나 추가된 리스트가 들어가야한다 우리가 입력한 어떤 값을 추가한 배열을 넣어줘야하는데
    // {만들어준 inistalstate:[새로운게 추가된 배열]}
    // = {...state.d_list[...state.d_list,action.payload]}
    // => ...state(모든데이터중에서)d_list를 [] 의 명령으로 데이터를 바꾸겠다
    // [...state.todolist(기본값유지해주고),action.payload(새 데이터 payload) 값을 가져오겠다 ]

    case "DELETETODO":
      return {
        ...state,
        d_list: state.d_list.filter((item) => item.id !== action.payload),
      };

    case "CHECKTODO":
      return {
        ...state,
        d_list: state.d_list.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              isDone: !item.isDone,
            };
          } else {
            return item;
          }
        }),
      };

    default:
      return state;
  }
}

export default DetailTodo;
