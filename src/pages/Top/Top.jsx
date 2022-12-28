import './top.scss'
import {data} from '../../PriceRate'

const Top = ({id,toggle}) => {
  return (
    <div className='top'>
        <span className="left">
            {data.filter((val)=> val.id === id)[0].pageview} PAGEVIEWS
        </span>
        <span className="right">
            <span className='topSpan'>
            💲{
              toggle ? (data.filter((val)=> val.id === id)[0].price)*12 * (0.75) :
              data.filter((val)=> val.id === id)[0].price
          }  
            </span>
             /month
        </span>
    </div>
  )
}

export default Top