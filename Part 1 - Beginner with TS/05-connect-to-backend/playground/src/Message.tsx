let count = 0 // NOT PURE

function Message() {
  // let count = 0 // PURE
  count++

  return <h1>{count}</h1>
}

export default Message
