import css from '../components/CampersList.module.css';
import svg from '../../public/symbol-defs.svg';
import { FaStar } from 'react-icons/fa6';
import { SlLocationPin } from 'react-icons/sl';
import VansFeature from './VansFeature';

export default function CampersList({ listCampers, onLoadMore, displayVans }) {
  return (
    <>
      <ul className={css.list}>
        {listCampers.slice(0, displayVans).map(camper => (
          <li key={camper._id} className={css.item}>
            <div>
              <img src={camper.gallery[0]} className={css.photo} alt="photo of campervan" />
            </div>
            <div className={css.wrapper}>
              <span className={css.positioning}>
                <h3 className={css.txt}>{camper.name}</h3>
                <span className={css.alighment}>
                  <p className={css.txt}> &#x20AC;{camper.price + ',00'}</p>
                  <svg width={24} height={24} className={css.icon}>
                    <use href={svg + '#icon-heart'}></use>
                  </svg>
                </span>
              </span>

              <div className={css.layout}>
                <p>
                  <FaStar color="rgba(255, 197, 49, 1)" size={16} className={css.color} />

                  <span className={css.space}> {camper.rating} (2 Reviews)</span>
                </p>
                <p>
                  <SlLocationPin /> {camper.location}
                </p>
              </div>

              <p className={css.description}>{camper.description}</p>

              <VansFeature features={camper} />
              <button className={css.btn}>See more</button>
            </div>
          </li>
        ))}
        {displayVans < listCampers.length && (
          <button className={css.load} onClick={onLoadMore}>
            Load more
          </button>
        )}
      </ul>
    </>
  );
}