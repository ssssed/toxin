import { Label, Title } from '@/components/ui-ud/ui';
import './style.scss';

const LandingForm = () => {
  return (
    <form className='landing-form'>
      <div className='landing-form__content'>
        <Title>Найдём номера под ваши пожелания</Title>
        <div className='landing-form__dates'>
          <Label className='landing-form__label'>
            Прибытие
            <input
              type='date'
              className='landing-form__datepicker'
            />
          </Label>
          <Label className='landing-form__label'>
            Выезд
            <input
              type='date'
              className='landing-form__datepicker'
            />
          </Label>
        </div>
        <Label className='landing-form__visitor'>
          Гости
          <input
            type='date'
            className='landing-form__datepicker'
          />
        </Label>
        <button className='landing-form__button'>подобрать номер</button>
      </div>
    </form>
  );
};

export default LandingForm;
