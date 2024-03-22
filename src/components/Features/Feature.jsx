import { FeatureDetails } from './Details/FeatureDetails';
import { FeatureContainer } from './Feature.syled';
import { FeaturesOptions } from './FeaturesOptions/FeaturesOptions';

export const Feature = ({item}) => {
  return (
    <FeatureContainer>
          <FeatureDetails item={item}/>
          <FeaturesOptions item={item}/>
    </FeatureContainer>
  );
};
