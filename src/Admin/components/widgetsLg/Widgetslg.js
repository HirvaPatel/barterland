import './widgetslg.css'

export default function Widgetslg() {
  const Button =({type}) =>{
    return <button className= {"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className='widgetslg'>
      <h3 className='widgetLgTitle'> Latest Deals</h3>
      <table className='widgetLgtable'>
        <tr className='widgetLgtr'>
        <th className='widgetLgth'>Customer</th>
        <th className='widgetLgth'>Date</th>
        <th className='widgetLgth'>Amount</th>
        <th className='widgetLgth'>Status</th>
        </tr>
        <tr className='widgetLgtr'>
          <td className='widgetLgUser'>
            <img src="Cristiano_Ronaldo_2018.jpg" alt="" className='widgetLgImg'></img>
            <span className="widgetLgName">Cristiano Ronaldo</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'><Button type="Approved"/></td>
        </tr>
        <tr className='widgetLgtr'>
          <td className='widgetLgUser'>
            <img src="Cristiano_Ronaldo_2018.jpg" alt="" className='widgetLgImg'></img>
            <span className="widgetLgName">Cristiano Ronaldo</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'><Button type="Declined"/></td>
        </tr>
        <tr className='widgetLgtr'>
          <td className='widgetLgUser'>
            <img src="Cristiano_Ronaldo_2018.jpg" alt="" className='widgetLgImg'></img>
            <span className="widgetLgName">Cristiano Ronaldo</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'><Button type="Declined"/></td>
        </tr>
        <tr className='widgetLgtr'>
          <td className='widgetLgUser'>
            <img src="Cristiano_Ronaldo_2018.jpg" alt="" className='widgetLgImg'></img>
            <span className="widgetLgName">Cristiano Ronaldo</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'><Button type="Pending"/></td>
        </tr>
        <tr className='widgetLgtr'>
          <td className='widgetLgUser'>
            <img src="Cristiano_Ronaldo_2018.jpg" alt="" className='widgetLgImg'></img>
            <span className="widgetLgName">Cristiano Ronaldo</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  )
}
