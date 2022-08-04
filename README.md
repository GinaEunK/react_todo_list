# 항해 99 React 주특기

### Tdoo List 프로젝트

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## React 입문 주차 프로젝트

2022.07.22 ~ 2022. 07.28

## 프로젝트 요구 사항

1. 제목과 내용을 입력하고, `추가하기` 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성해주세요.
2. Todo의 **_isDone 상태가 true이면, 상태 버튼의 라벨을 취소, isDone이 false 이면 라벨_** 을 완료 로 조건부 렌더링 해주세요.
3. Todo의 상태가 `Working` 이면 위쪽에 위치하고, `Done`이면 아래쪽에 위치하도록 구현합니다.
4. Layout의 최대 넓이는 `1200px,` 최소 넓이는 `800px` 로 제한하고, 전체 화면의 가운데로 정렬해주세요.
5. 아래 이미지의 폴더 구조와 동일하게 구현하고 컴포넌트 구성도 똑같이 나눠서 구현해주세요.

![](https://user-images.githubusercontent.com/109017882/182016072-3f1905fb-c8b1-4f83-b49f-e94b95deecdb.png)

## 기능구현

<img width="1349" alt="스크린샷 2022-07-31 오후 5 09 18" src="https://user-images.githubusercontent.com/109017882/182016525-447f1e8c-1523-4c4f-ac50-d1d2552dc0b9.png">

---

## React 숙련 주차 프로젝트

2022.07.29 ~ 2022. 08.04

## 프로젝트 요구 사항

React 입문 주차 개인 과제를 `react-router-dom`, `styled-components`, `redux`를 사용해서 My Todo List 를 다시 만들어봅니다

1. **todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리합니다.** 
2. todos 모듈은 `**Ducks 패턴**`으로 구현합니다. 
3. `상세보기` 클릭하면 Todo의 상세 페이지로 이동합니다. 상세 페이지에서 보여야 하는 내용은 아래 토글에서 별도 안내합니다. 
4. 상세 페이지의 디자인과 화면 구성은 자유롭게 구현하되, 아래 요소들은 보여야 합니다. - Todo의 ID - Todo의 제목 - Todo의 내용 - `이전으로` 버튼 - `이전으로` 버튼을 구현하고, `이전으로` 버튼을 클릭하면 리스트 화면으로 되돌아 갑니다.

**제한사항** - map을 사용할 때 **반드시 key**을 넣어야 하며, `map` 의 **index를 사용을 금지**합니다. 이것을 금지하는 이유는 강의에 다루었습니다. - Todo Id 생성 시 `todos.length` 사용해서 생성하지 않습니다. `todos.length` 을 사용해서 id 생성 시 **발생할 수 있는 문제점에 대해 고민**해보시길 바랍니다.

## 기능구현

<img width="665" alt="스크린샷 2022-08-04 오후 1 47 45" src="https://user-images.githubusercontent.com/109017882/182767835-c49d5237-1566-4dff-8b2d-b8085160a2ca.png">
