import React from 'react';
import './price.scss';
import Button from '../button/Button';
import { LuRocket } from 'react-icons/lu';
import { FaChevronCircleRight } from 'react-icons/fa';

const plans = [
  {
    type: 'For individuals',
    title: 'Basic Plan',
    price: 39,
    features: ['All analytics features', 'Up to 250,000 tracked visits', 'Normal support'],
  },
  {
    type: 'For startups',
    title: 'Growth Plan',
    price: 69,
    features: ['All analytics features', 'Up to 250,000 tracked visits', 'Normal support'],
    recommended: true,
    discount: 'Save 20%',
  },
  {
    type: 'For big companies',
    title: 'Enterprise Plan',
    price: 99,
    features: ['All analytics features', 'Up to 250,000 tracked visits', 'Normal support'],
  },
];

const Price = () => {
  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <div
          className="card"
          key={index}
        >
          <div className="card_container">
            <div className="card_top">
              <div className="icon">
                <LuRocket />
              </div>
              <div>
                <p>{plan.type}</p>
                <p>{plan.title}</p>
              </div>
            </div>
            <div className="card_price">
              <p>
                ${plan.price} <span>/monthly</span>
              </p>
            </div>
            <hr />
            <div className="card_info">
              {plan.features.map((feature, idx) => (
                <div className="card_info_one" key={idx}>
                  <FaChevronCircleRight className="icon" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <Button text="Get started" p={'10px 100px'} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Price;
