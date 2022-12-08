import React from 'react'

// 객체 각각의 정보를 나타낼 컴포넌트
import ListItem from './ListItem'

const RecyclingComponent = (props) => {

  // 각각의 ListItem에 배정할 객체의 배열
  const object = [
    {name: 'Kim', age: 27, gender: 'Man'},
    {name: 'Lee', age: 24, gender: 'Woman'},
    {name: 'Kwak', age: 30, gender: 'Man'},
    {name: 'Song', age: 25, gender: 'Woman'},
    {name: 'Tae', age: 31, gender: 'Woman'},
  ]

  return (
    <div>
      {/* React에서는 HTML 내에서 for문을 지원하지 않으므로 map등의 다른 방법들을 사용해야 한다. */}

      {/* map 함수를 이용한 반복 */}
      {object.map((el) => {
        // 반복되는 컴포넌트에는 항상 key props를 지정해야 한다.
        // key props는 반복되는 해당 컴포넌트 뿐만 아니라 다른 모든 반복되는 컴포넌트들간의 key값과도 겹치지 않는 것이 가장 좋다.
        // 해당 예제에서는 단순히 name을 key로 지정해줬지만 프로젝트 진행 시에는 고유의 ID를 객체에 포함시켜 이를 key로 지정하는 것이 가장 이상적이다.
        return <ListItem key={el.name} name={el.name} age={el.age} gender={el.gender}/>
      })}

    </div>
  )
}

export default RecyclingComponent