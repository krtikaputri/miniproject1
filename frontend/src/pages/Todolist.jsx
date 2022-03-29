import React, { useEffect, useState } from "react";
import jwtdecode from "jwt-decode";
import "./Todolist.css";
import AddToDo from "../components/AddToDo";
import Ongoing from "../components/Ongoing";
import api from "../components/config/Api";

const Todolist = () => {
  const token = localStorage.getItem("token");
  const jwt = jwtdecode(token);
  const [dataUser, setDataUser] = useState([]);
  const hour= new Date()
  const getHour=hour.getHours()
  const [getHourNow,setGetHourNow]=useState("")
  console.log(getHour);
  useEffect(() => {
    api.get(`get/${jwt.id}`).then((res) => {
      setDataUser(res.data.data.Notes);
    }) 
    if(getHour >= 3 && getHour <= 12){
      setGetHourNow("Selamat Pagi")
    } else if( getHour >= 12 && getHour <= 15 ){
      setGetHourNow("Selamat Siang")
    } else if (getHour >= 15 && getHour <= 18){
      setGetHourNow("Selamat Sore")
    } else if(getHour >= 18 || getHour <= 3){
      setGetHourNow("Selamat Malem")
    }
  }, []);

  return (
    <div className="salam">
      <h1>{getHourNow}, {jwt.firstname}</h1>

      <AddToDo id={jwt.id} />
      <h2>Ongoing</h2>
      {dataUser.map(el=>
      el.isPriority===false &&  (
            <Ongoing key={el.id} todo={el.note} id={el.id} isPriority={el.isPriority} /> 
          ))}
      <h2>Complited</h2>
      {dataUser.map(el=>
      el.isPriority===true &&  (
            <Ongoing key={el.id} todo={el.note} id={el.id} checkedComplite={true} coret="coret"/>
            
          ))
          
          }
    </div>
  );
};

export default Todolist;
