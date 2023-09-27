---
title:  "[TCA] 1. What is TCA??"
last_modified_at: 2023-09-27T19:06:00-05:00
toc: true
categories:
  - Architecture
tags:
  - Swift
  - SwiftUI
  - TCA
---

# TCA?(The Composable Architecture)  

> TCA는 단방향 아키텍쳐로서, 기존의 단방향 아키텍쳐인 Redux의 영향을 많이 받았다  
> Swift의 프레임워크로는 ReSwift와 ReactorKit과 비슷하다
## 단방향 아키텍쳐란(Uni-directional Flow, Architecture) ?
>많은 최신 앱 프레임워크에서 사용되는 디자인 원칙 및 아키텍처 패턴이다. 핵심 아이디어는 데이터가 애플리케이션을 통해 일반적으로 단일 진실 공급원(SSOT:Single Source Of Truth)[애플리케이션 상태]에서 사용자 인터페이스로 한 방향으로 흐른다는 것이다.
- 단방향 아키텍쳐에 관해선 따로 알아보겠다  

### TCA
![TCA1](/images/TCA/TCA1.png)
[출처] https://motosw3600.tistory.com/63
### MVC
![MVC](/images/TCA/MVC.png)
[출처] https://developer.mozilla.org/ko/docs/Glossary/MVC

TCA 와 MVC 의 도식을 보고 비교해봤을때의 차이점은  
TCA의 데이터 흐름에 양방향으로 겹치는 화살표가 없다는 것이다.
  
즉 MVC에서는 State가 여러 곳에서 영향을 받게되며 규모가 커질수록 side effect 때문에 발생하는 오류를 예측할 수 없고, 디버깅도 어려워진다. 반면 TCA와 같은 단방향 아키텍쳐들은 State에 전달되는 변경사항들이 한 방향으로만 수정된다. 따라서 개발자가 State의 흐름만 인지한 채로 코드를 짜기 때문에 디버깅도 쉬워지고 코드 정리가 잘 되는 것이다

## Why TCA?
기존의 단방향 아키텍쳐에는 대표적으로 ReactorKit 이 있는데 ReactorKit은 UIKit을 활용해 앱을 만들때 많이 사용되고 TCA는 SwiftUI와 활용될때 더 빛을 내게 된다.  
그리고 기본적으로 TCA는 Combine의 의존성을, ReactorKit은 RxSwift의 의존성을 갖고있기 때문에 SwiftUI에겐 TCA가 더욱 잘 어울릴 수 밖에 없다.

### TCA에서 강조되는 3가지 원칙
#### Composition(합성)
- TCA의 구성성은 애플리케이션의 복잡한 부분을 더 작고 재사용 가능한 구성 요소로 분해하는 기능을 의미한다. 더 작은 기능 단위를 사용하여 앱을 구성하도록 권장하므로 관리 및 추론이 더 쉬워진다.
- TCA에서 이러한 구성 가능성은 "기능 모듈" 또는 "모듈"로 알려진 모듈식 구성 요소 생성을 통해 달성된다. 각 모듈에는 앱 기능의 특정 부분을 캡슐화하는 자체 상태, 작업, 감소기 및 효과가 있다.
- 이러한 기능 모듈을 결합하여 앱의 전체 기능을 구축할 수 있다. 이러한 구성적 접근 방식을 사용하면 의도하지 않은 부작용이나 복잡성을 유발하지 않고 기능을 더 쉽게 추가, 수정 또는 제거할 수 있다.
#### Testing(테스트)
- 테스트는 TCA의 기본 측면이다. 아키텍처는 다음과 같은 특정 원칙을 준수하여 코드의 테스트 가능성을 높이도록 설계되었다.
- 순수 감속기: TCA의 감속기는 순수 함수이다. 상태와 동작을 입력으로 취하고 새로운 상태를 출력으로 생성한다. 부작용이 없기 때문에 테스트가 간단하다. 특정 상태와 동작이 주어지면 리듀서가 예상한 상태를 생성하는지 확인할 수 있다.
- 결정론적 효과: TCA의 효과는 결정론적으로 설계되었다. 이는 특정 입력이 주어졌을 때 예측 가능한 결과를 생성한다는 것을 의미한다. TCA의 테스트 유틸리티를 사용하여 테스트에서 효과 실행을 시뮬레이션하여 예상대로 작동하는지 확인할 수 있다.
- 격리된 구성 요소: 기능 모듈은 독립적이고 격리되도록 설계되었다. 이러한 격리를 통해 복잡한 설정이나 모의 작업 없이 개별 구성 요소를 개별적으로 쉽게 테스트할 수 있다.
- 시간 이동 디버깅: TCA는 시간 이동 디버깅도 지원하므로 과거 작업을 재생하여 앱이 어떻게 특정 상태에 도달했는지 이해할 수 있다. 이는 복잡한 앱 동작을 디버깅하기 위한 강력한 도구다.
#### Ergonomic(인체공학)
- TCA의 인체공학은 개발자 경험과 아키텍처 작업이 얼마나 쉬운지를 나타낸다. TCA는 상용구를 줄이고 코드 가독성을 높여 직관적이고 생산적인 개발 경험을 제공하는 것을 목표로 한다.
- 인체공학적 측면을 개선하기 위해 TCA는 일반적인 작업을 단순화하는 Swift 기반 API 및 유틸리티를 제공한다.
- 액션 바인딩: TCA는 사용자 인터페이스 액션을 아키텍처의 액션에 바인딩하는 간결한 방법을 제공하여 작성해야 하는 코드의 양을 줄인다.
- 뷰 스토어: TCA는 뷰가 상태 변경에 액세스하고 관찰하는 방법을 단순화하여 앱 데이터 작업을 더욱 인체공학적으로 만드는 '뷰 스토어' 개념을 도입한다.
- 리듀서 향상: TCA에는 리듀서를 쉽게 구성하고 복잡한 상태 변환을 관리하는 유틸리티가 포함되어 있다.


> TCA의 중요 요소들에는 State, Action, Reducer, Store, Environment 등이 있다.
다음 글에서 이들에 대해 자세히 다뤄보도록 하겠다.