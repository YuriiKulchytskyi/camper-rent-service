import {
  FeatureSvg,
  FeaturesOptionsItem,
  FeaturesOptionsList,
} from './FeaturesOptions.style';
import icons from '../../../images/icons.svg';

export const FeaturesOptions = ({ details }) => {
  const featureOptions = [
    { icon: 'Users', label: `Adults: ${details.adults}` },
    { icon: 'Container', label: `Automatic` },
    { icon: 'wind-icon', label: `AC` },
    { icon: 'Vertical-container', label: `Petrol` },
    { icon: 'Horizontal-container', label: `Kitchen` },
    { icon: 'Container-1', label: `Beds: ${details.beds}` },
    { icon: 'air-conditioner', label: `Air Conditioner` },
    { icon: 'cd', label: `CD` },
    { icon: 'radio', label: `Radio` },
    { icon: 'hob', label: `Hob: ${details.hob}` },
  ].filter(({ icon }) => details[icon.replace('-', '')] !== 0);

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
