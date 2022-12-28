import './bottom.scss'

const Bottom = () => {
  return (
    <>
      <hr />
      <div className="base">
        <div className="bottom">
          <table>
            <tbody>
            <tr>
              <td><img src="./icon-check.svg" alt="" /></td>
              <td className='text'>Unlimited Website</td>
            </tr>
            <tr>
              <td> <img src="./icon-check.svg" alt="" /></td>
              <td className='text'>100% data ownership</td>
            </tr>
            <tr>
              <td><img src="./icon-check.svg" alt="" /></td>
              <td className='text'>Email reports</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="bottom-button">
            <button className='button'>Start my trail</button>
        </div>
      </div>
    </>
  )
}

export default Bottom