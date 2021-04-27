// >>>資料集>>>
let data =[ 
    {
    name:"王小熊",
    id:"ABC12345",
    major:"中文系",
    group:"第一組"
              },
    {
     name:"陳大雄",
     id:"BCD12345",
     major:"數學系",
     group:"第二組"
           },
    {
     name:"林中中",
     id:"CDE12345",
     major:"資工系",
     group:"第三組"
                  }
];
// DOM
const list = document.querySelector(".list");
const saveBtn = document.querySelector(".saveBtn");
// formDOM
const myName = document.querySelector(".name");
const myId = document.querySelector(".id");
const myMajor = document.querySelector(".major");
const myGroup = document.querySelector(".group");
// 渲染函式
function render(){
    let content="";
    data.forEach((item,index)=>{
        content+=`<tr>
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.id}</td>
        <td>${item.major}</td>
        <td>${item.group}</td>
        <td class="icons"><span data-id="${index}" class="deleteBtn material-icons">
            delete_outline
            </span></td>
    </tr>`;
    })

    list.innerHTML = content;
}
// 初始化函式
function init(){
    render()
}

// >>>js邏輯撰寫開始>>>
// 初始化
init()
// 填寫資料>點擊按鈕>送出資料到data裡>渲染畫面
saveBtn.addEventListener("click",function(e){
    if (myName.value===""||myId.value===""|| myMajor.value===""||myGroup.value===""){
        alert("請輸入所有資料唷~");
        return;
    } ;

    let obj={};
    obj.name=myName.value;
    obj.id=myId.value;
    obj.major=myMajor.value;
    obj.group=myGroup.value;

    data.push(obj);   

    render()

    myName.value="";
    myId.value="";
    myMajor.value="";
    myGroup.value="";

})
// (綁list範圍監聽)點選刪除按鈕>從data刪除資料>渲染畫面
list.addEventListener("click",function(e){
    console.log(e.target.getAttribute("class"));

    if (e.target.getAttribute("class") !== "deleteBtn material-icons"){
        return;
    };


    if (confirm("確定要刪除資料嗎?")) {
       let deleteNum = e.target.getAttribute("data-id");
       data.splice(deleteNum,1);
       render()
    }
    else {
        return;
    }
    
    
})