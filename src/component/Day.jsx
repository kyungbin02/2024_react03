import { useParams } from "react-router-dom";
import dummy from "../db/data.json"
import React from 'react';
import Word from "./Word";

function Day(props) {
  // const day = 3;
  // url에 포함된 day값을 가져오기 위해서 useParams()
  const day = useParams().day ;
  const wordList = dummy.words.filter(k=>(k.day) === Number(day))
  return (
    <div>
        <table>
              <tbody>
                  {/* {dummy.words.map(k=>{ */}
                  {wordList.map(k => {
                      return <Word key={k.id} word={k}/>
                  })}
              </tbody>
        </table>
    </div>
  );
}

export default Day;