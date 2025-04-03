import Header from '../../components/Header'
import HeaderImage from '../../images/logo2.png'
import Card from '../../UI/Card'
import {plans} from '../../data'
import { Link } from 'react-router-dom'
import './plans.css'

const Plans = () => {
  return (
    <>
    <Header title="Membership Plans" image={HeaderImage}>
    The Plans here is the Best combo you can ever have for your Skin/Hair care routin.
    </Header>

    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features}) => {
            return <Card key={id} className="plan">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`#${price}`}</h1><h2>/mo</h2>
              <h4>features</h4>
              {
                features.map(({feature, available}, index) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                })
              }
              <Link to="/contact"><button className='btn lg'>Choose Plan</button></Link>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans