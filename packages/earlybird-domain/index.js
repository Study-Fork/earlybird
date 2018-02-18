export const Status = Object.freeze({
  READY: '오늘의 일과 시작!',
  STARTED: '오늘은 이 정도면 충분',
  FINISHED: 'Have a good day :D',
})

export default function getHistory(user, feeds) {
  return feeds.filter(feed => feed.message.includes('ROUND'))
}
