/**
 * REACT集中于VIEW层
 * 该类关注逻辑
 */
class staffItem{
  constructor(item){
    this.info={};
    this.info.name=item.name;
    this.info.age=item.age||0;
    this.info.sex=item.sex;
    this.info.id=item.id;
    this.info.descrip=item.descrip||"";
    this.key=++staffItem.key;
  }
}
staffItem.key=0;

class STAFF{
  constructor(){
    this.allStaff=[
      new staffItem(STAFF.rawData[0]),
      new staffItem(STAFF.rawData[1])
    ];
    this.staff=this.allStaff;
  }

  addItem(item){
    let newItem=new staffItem(item);
    this.allStaff.push(newItem);
    this.staff=this.allStaff;
    this.order("身份");
    //console.log(this.staff);
    return this;
  }

  search(word){
    //this.word=word;
    this.staff=this.allStaff;
    this.staff=this.allStaff.filter(item=>{
      return item.info.name.indexOf(word)!=-1||
             (item.info.age+'').indexOf(word)!=-1||
             item.info.id.indexOf(word)!=-1||
             item.info.sex.indexOf(word)!=-1
    });
    return this;
  }

  select(id){
    //console.log(id);
    this.staff=this.allStaff;
    this.staff=this.allStaff.filter(item=>{
      console.log(item.info.id);
      return item.info.id==id;
    });
    return this;
  }

  order(method){
    //console.log(method);
    this.staff=this.allStaff;
    this.staff.map((item)=>{
      if(item.info.id==="主任")
      {
        item.info.idKey=1;
      }
      else if(item.info.id==="老师"){
        item.info.idKey=2;
      }
      else if(item.info.id==="学生"){
        item.info.idKey=3;
      }
      else{
        item.info.idKey=4;
      }
    })
    //console.log(this.staff[1].key);
    if(method==="身份"){
      this.staff.sort((val1,val2)=>{
        //console.log(val2);
        if(val1.info.idKey<val2.info.idKey){
          return -1;
        }
        else if(val1.info.idKey>val2.info.idKey){
          return 1;
        }
        else
        {
          return 0;
        }
      })
    }
    if(method==="年龄升"){
     this.staff.sort((val1,val2)=>{
        return val1.info.age>val2.info.age;
      })
    }
    if(method==="年龄降"){
      this.staff.sort((val1,val2)=>{
         return val1.info.age<val2.info.age;
       })
     }
    return this;
  }

  remove(key){
    let newStaff=this.allStaff.filter((item)=>{
      return item.key!=key;
    });
    console.log(newStaff);
    this.allStaff=newStaff;
    this.search("");
    return this;
  }

  editStaffItem(item){
    this.allStaff.forEach((staffItem)=>{
      if(staffItem.key==item.key){
        staffItem.info.name=item.name;
        staffItem.info.sex=item.sex;
        staffItem.info.age=item.age;
        staffItem.info.id=item.id;
        staffItem.info.descrip=item.descrip;
      }
    });
    this.search("");
    return this;
  }
}

STAFF.rawData=[
  {
    descrip:'张若昀最帅',
    sex:'男',
    age:20,
    name:'张三',
    id:'主任'
  },
  {
    descrip:'张若昀最帅',
    sex:'男',
    age:20,
    name:'李四',
    id:'学生'
  }
];

export default STAFF;