# 과제 목표

- 스토리북을 설치하고 세팅합니다.
- 컴포넌트 2개를 생성하고, 해당하는 스토리북 문서를 작성합니다.

# 가이드

- 과제 진행 이전 npm install 명령어로 필요한 dependencies를 설치해주세요.
- 패키지 매니저는 **npm**을 사용합니다.
- 기본적으로 스타일은 styled-components를 이용하여 구현합니다.
- App.tsx파일과 index.tsx파일은 변경하지 말아주세요.
- 개인 repository에 fork해서 과제 수행 후 PR을 올려주세요.

# 구현 요구 사항

#### 스토리북을 설치하고 세팅해주세요.

- 공식문서나 관련 글을 서치하여 패키지에 storybook을 설치해주세요.
- 터미널에 npm run storybook 명령어를 입력하면 기본 6006 포트에서 구동되어야 합니다.

#### 텍스트 컴포넌트를 작성해주세요.

- 텍스트를 재사용하기 위한 텍스트 컴포넌트를 작성해주세요.
- 파일명과 컴포넌트명은 'Text'입니다.
- 요구되는 props은 다음과 같습니다.

```typescript
{
  text: string, fontSize: number, fontWeight: number, color: string
}
```

#### 구현한 텍스트 컴포넌트를 이용하여 [시대생 학식 정보 컴포넌트](https://uoslife.com/utility/cafeteria)를 작성해주세요.

- 파일명과 컴포넌트명은 'Cafeteria'입니다.
- 시대생 학식 정보 페이지에서 개발자도구를 이용하여 실제 사용되는 컴포넌트와 똑같이 구현해주세요.
- 요구되는 props은 다음과 같습니다.

```typescript
{
	cafeteria: CafeteriaType;
}
```

```typescript
type CafeteriaType = {
	location: string;
	mainMenu: string;
	detailMenu: string;
	nutritionalInfo: string;
	openingHours: string;
	price: string;
};
```

- <Text /> 컴포넌트를 이용하여 cafeteriaType에 해당하는 props들을 렌더링해주세요.

```typescript
// 예시
<Text text={cafeteria.location} ... />
```

- App.tsx 파일에 기본 학식 정보가 저장되어있으며, 구현이 완료되면 정상적으로 실행되어야 합니다.
- '자세히보기'를 통해 시립대 학식 페이지로 redirect되는 기능은 구현해도 좋고, 구현하지 않아도 좋습니다.

#### 텍스트 컴포넌트와 학식 컴포넌트의 story를 작성해주세요.

- 각 컴포넌트 폴더 안에 <컴포넌트 이름>.stories.tsx 파일을 생성해주세요.
- 스토리북 설치시 생성된 stories 파일 또는 공식문서를 참고하여 작성해주세요.
- run storybook으로 실행된 스토리북 화면에서 Text와 Cafeteria 컴포넌트를 확인할 수 있어야합니다.

# 참고 문서 링크

https://storybook.js.org/docs/react/get-started/install
