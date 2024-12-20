import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* 라우터의 영향을 받지 않고 고정된 컴포넌트 */}
        <Header />
        <Routes>
          {/* path='/' 는 첫페이지를 의미한다.(홈페이지)  */}
            <Route path='/' element={<DayList />} />
            {/* /day면  <Day />여기로 감  주소에 따라서 컴포넌트가 바뀜 = 라우팅 */}
            {/* 동적라우딩 */}
            {/* /:day가 DayList의 ${k.day} 이걸 뜻함*/}
            <Route path='/day/:day' element={<Day />} />  

            <Route path='/create_word' element={<CreateWord />} />
            <Route path='/create_day' element={<CreateDay />} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
