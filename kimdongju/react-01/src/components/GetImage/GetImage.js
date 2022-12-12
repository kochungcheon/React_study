import React from 'react'

// 이미지를 가져오기 위해 import
// 아래의 과정을 거치면서 애플리케이션에 이미지가 포함되도록 변환됨
// 이에 따라 애플리케이션은 서버에 배포되면서 해당 이미지에 대한 링크를 만들 수 있게 됨
// 그 링크는 만들어진 코드에 동적으로 삽입된다.
import exampleImage from '../../assets/meals.jpg'

const GetImage = (props) => {

  return (
    <div>
      <img src={exampleImage} style={{width: '100px', height: 'auto'}}/>
    </div>
  )
}

export default GetImage