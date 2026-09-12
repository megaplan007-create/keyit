# 자동 배포 설정

이 프로젝트는 `main` 브랜치에 코드가 올라오면 자동으로 빌드한 뒤 현재 호스팅 서버에 FTPS로 배포합니다.

## GitHub 저장소에 한 번만 등록할 값

GitHub 저장소의 **Settings → Secrets and variables → Actions** 에 아래 4개를 추가합니다. 값은 절대 코드 파일에 적지 않습니다.

| Secret 이름 | 넣을 값 |
| --- | --- |
| `FTPS_SERVER` | 호스팅 FTP 서버 주소 |
| `FTPS_USERNAME` | FTP 계정명 |
| `FTPS_PASSWORD` | 새로 바꾼 FTP 비밀번호 |
| `FTPS_SERVER_DIR` | 현재 사이트의 웹 루트 경로. FileZilla 오른쪽 창에서 `index.html`이 있는 폴더 경로 |

## 이후 작업 방법

1. 코드나 글을 수정한다.
2. GitHub의 `main` 브랜치에 저장한다.
3. GitHub Actions가 `npm run build`를 실행한다.
4. 완성된 `dist` 폴더 내용만 FTPS로 자동 업로드한다.

수동 FileZilla 업로드는 더 이상 필요하지 않습니다. 배포가 실패하면 GitHub의 **Actions** 화면에서 오류를 확인하고, 이전 커밋으로 되돌리면 사이트도 이전 상태로 복구할 수 있습니다.

## 배포 전 확인

- 처음 한 번은 `FTPS_SERVER_DIR`가 맞는지 확인합니다. 잘못된 폴더를 지정하면 사이트에 반영되지 않습니다.
- FTP 비밀번호는 이번에 새 비밀번호로 변경한 뒤 Secret에 저장합니다.
- `dist` 폴더나 `.env` 파일을 GitHub에 직접 올리지 않습니다.
