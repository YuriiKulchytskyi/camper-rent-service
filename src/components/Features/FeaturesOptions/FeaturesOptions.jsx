import {
  FeatureSvg,
  FeaturesOptionsItem,
  FeaturesOptionsList,
} from './FeaturesOptions.style';
import icons from '../../../images/icons.svg';

export const FeaturesOptions = ({ item }) => {
  const featureOptions = [
    { icon: 'Adults', label: `${item.adults} Adults` },
    {
      icon: 'Container',
      label: 'Automatic',
      condition: !item.transmission === 0,
    },
    { icon: 'wind-icon', label: 'AC', condition: !item.airConditioner === 0 },
    {
      icon: 'Vertical-container',
      label: 'Petrol',
      condition: item.engine !== 'electric',
    },
    {
      icon: 'Horizontal-container',
      label: 'Kitchen',
      condition: item.kitchen !== 0,
    },
    {
      icon: 'Container-1',
      label: `${item.details.beds} Beds`,
      condition: item.details.beds !== 0,
    },
    {
      icon: 'hotel-air-conditioner',
      label: 'Air Conditioner',
      condition: item.airConditioner !== 0,
    },
    { icon: 'cd', label: 'CD', condition: item.CD !== 0 },
    { icon: 'radio', label: 'Radio', condition: item.radio !== 0 },
    {
      icon: 'hob',
      label: `${item.details.hob} Hob`,
      condition: item.details.hob !== 0,
    },
    {
      icon: 'freezer',
      label: `${item.details.freezer} Freezer`,
      condition: item.details.freezer !== 0,
    },
    {
      icon: 'gas',
      label: `${item.details.gas} Gas`,
      condition: item.details.gas !== 0,
    },
    {
      icon: 'water',
      label: `${item.details.water} Water`,
      condition: item.details.water !== 0,
    },
    {
      icon: 'toilet-paper',
      label: `${item.details.toilet} Toilet`,
      condition: item.details.toilet !== 0,
    },
  ].filter(({ condition }) => condition !== false && condition !== undefined);

  return (
    <FeaturesOptionsList>
      {featureOptions.map(({ icon, label }, index) => (
        <FeaturesOptionsItem key={index}>
          <FeatureSvg>
            <use href={`${icons}#icon-${icon}`}></use>
          </FeatureSvg>
          {label}
        </FeaturesOptionsItem>
      ))}
    </FeaturesOptionsList>
  );
};
