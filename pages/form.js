

function form() {
    
    const registerUser = async event => {
      event.preventDefault()
  
      const res = await fetch('/api/response', {
        body: JSON.stringify({
          name: event.target.name.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
  
      const result = await res.json()
      // result.user => 'Ada Lovelace'
      console.log(result)
      alert("succesfully registered");
    }
  
    return (
      <form onSubmit={registerUser}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
        <button type="submit">Register</button>
      </form>
    )
  }
export default form
