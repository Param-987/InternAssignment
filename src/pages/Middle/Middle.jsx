import './middle.scss'


const Middle = ({id,setId,toggle,setToggle}) => {
  const handleInput = e => setId(e.target.value)
  const handleChange = e => setToggle(!toggle)
  return (
    <div className="cover">
      <input 
      type="range" 
      min="0" 
      max="4" 
      step="1" 
      value={id} 
      className='styled-slider' 
      onInput={handleInput} />

    <div className='container'>
      <span className='myData'>Monthly Billing</span>
        <div className="onoffswitch">
        <input 
        type="checkbox" 
        name="onoffswitch" 
        className="onoffswitch-checkbox" 
        id="myonoffswitch" 
        onChange={handleChange} 
        checked = {toggle}
        />
         <label className="onoffswitch-label" htmlFor="myonoffswitch">
        <span className="onoffswitch-inner"></span>
        <span className="onoffswitch-switch"></span>
        </label>
        </div>
        <span className='myData'>Yearly Billing</span>
        <span className='myData discount'>25% Discount</span> 
        </div>
        </div>
  )
}
export default Middle