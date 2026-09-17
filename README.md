# LUMA — Orbit of Light

방향을 뒤집어 빛을 모으고 붉은 파동을 피하는 모바일 우선 원터치 아케이드 게임입니다.

<p align="center">
  <img width="480" alt="LUMA 게임 스크린샷" src="https://github.com/user-attachments/assets/d6b4a599-07e6-4d6a-8952-177c1cb2882a" />
</p>

## 게임 특징

- 한 번의 터치로 공전 방향을 전환하는 간단한 조작
- 30초 생존 후 등장하는 보스 `THE ECLIPSE`
- 시간선을 나누는 고난도 모드 `ECHO ANOMALY`
- 두 궤도 사이의 중력선으로 장애물을 제거하는 `GRAVITY CUT`
- 에코와 재충돌하면 주변 위협이 사라지지만 100점을 잃는 `PARADOX`
- 서로 다른 궤도를 가진 6개 행성계: LUMA, VELA, NOX, KAIROS, RIFT, ABYSS
- 매 판 무작위로 선택되는 보너스 미션 3개
- 누적한 빛으로 해금하는 행성계와 기기에 저장되는 최고 기록
- 설치 및 오프라인 플레이를 지원하는 PWA

## 실행하기

별도 패키지 설치 없이 Python 3로 로컬 서버를 실행할 수 있습니다.

```bash
npm run dev
```

브라우저에서 [http://localhost:8080](http://localhost:8080)을 여세요.

## 조작법

| 환경 | 조작 |
| --- | --- |
| 모바일 | 화면 터치 |
| 데스크톱 | 클릭 또는 `Space` |

터치할 때마다 공전 방향이 반대로 바뀝니다. ECHO ANOMALY를 장착하면 직전 방향으로 에코가 분기되며, 플레이어와 에코 사이의 중력선으로 장애물을 자를 수 있습니다. 에코와 다시 충돌하면 콤보가 초기화되고 100점을 잃습니다.

## 개발 명령어

```bash
npm test       # 게임 로직 테스트
npm run check  # JavaScript 문법 검사
```

게임 진행도, 최고 기록, 명예의 전당 데이터는 브라우저의 로컬 저장소에 보관됩니다. 일일 도전 모드는 현재 준비 중입니다.
